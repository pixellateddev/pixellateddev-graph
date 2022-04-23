import { ObjectId } from 'bson';
import { extendType, idArg, nonNull, stringArg } from 'nexus';

import { isAuthenticated } from '../../rules';
import { CourseInput, JobInput, PersonalDetailsInput } from './input';

export * from './types'

export const ResumeQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('resumes', {
            shield: isAuthenticated(),
            type: 'Resume',
            resolve: async (_, __, { prisma, user }) => {
                return prisma.resume.findMany({ where: { userId: user.id }})
            }
        })

        t.field('resume', {
            shield: isAuthenticated(),
            type: 'Resume',
            args: {
                resumeId: nonNull(idArg())
            },
            resolve: async (_, { resumeId }, { prisma }) => {
                const resume = await prisma.resume.findUnique({ where: { id: resumeId }})
                return resume
            }
        })
    }
})


export const ResumeMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field('createResume', {
            shield: isAuthenticated(),
            type: 'Resume',
            args: {
                title: nonNull(stringArg())
            },
            resolve: async (_, { title }, {prisma, user}) => {
                const resume = await prisma.resume.create({
                    data: {
                        title,
                        userId: user.id
                    }
                })
                return resume
            }
        })

        t.nonNull.field('deleteResume', {
            shield: isAuthenticated(),
            type: 'Info',
            args: {
                resumeId: nonNull(idArg())
            },
            resolve: async (_, { resumeId }, { prisma }) => {
                await prisma.resume.delete({where: {id: resumeId}})
                return {
                    message: 'Successfully Deleted',
                    code: 204,
                    status: 'OK'
                }
            }
        })

        t.nonNull.field('editPersonalDetails', {
            shield: isAuthenticated(),
            type: 'Resume',
            args: {
                resumeId: nonNull(idArg()),
                personalDetails: nonNull(PersonalDetailsInput)
            },
            resolve: async (_, { resumeId, personalDetails }, {prisma}) => {
                console.log(personalDetails)
                const resume = await prisma.resume.update({
                    where: {
                        id: resumeId
                    },
                    data: {
                        personalDetails
                    }
                })
                return resume
            }
        })

        t.nonNull.field('addJobExperience', {
            shield: isAuthenticated(),
            type: 'Resume',
            args: {
                resumeId: nonNull(idArg()),
                newJob: nonNull(JobInput)
            },
            resolve: async ( _, { resumeId, newJob }, { prisma}) => {               
                const job = {
                    ...newJob,
                    id: new ObjectId().toString()
                }

                const resume = await prisma.resume.update({
                    where: { id: resumeId },
                    data: { workExperience: {
                        push: job
                    }}
                })

                return resume
            }
        })

        t.nonNull.field('updateJobExperience', {
            type: 'Resume',
            shield: isAuthenticated(),
            args: {
                resumeId: nonNull(idArg()),
                jobId: nonNull(idArg()),
                job: nonNull(JobInput)
            },
            resolve: async ( _, { resumeId, jobId, job }, { prisma }) => {
                const resume = await prisma.resume.update({
                    where: { id: resumeId },
                    data: { workExperience: {
                        updateMany: {
                            where: {id: jobId},
                            data: {
                                ...job
                            }
                        }
                    }}
                })
                return resume
            }
        })

        t.nonNull.field('deleteJobExperience', {
            type: 'Resume',
            shield: isAuthenticated(),
            args: {
                resumeId: nonNull(idArg()),
                jobId: nonNull(idArg())
            },
            resolve: async (_, { resumeId, jobId }, { prisma }) => {
                const resume = await prisma.resume.update({
                    where: {id: resumeId},
                    data: {workExperience: { deleteMany: {where: { id: jobId }}}}
                })
                return resume
            }
        })

        t.nonNull.field('addCourse', {
            type: 'Resume',
            shield: isAuthenticated(),
            args: {
                resumeId: nonNull(idArg()),
                course: nonNull(CourseInput)
            },
            resolve: async (_, { resumeId, course }, { prisma }) => {
                const newCourse = {
                    ...course,
                    id: new ObjectId().toString()
                }

                const resume = await prisma.resume.update({
                    where: {id: resumeId},
                    data: { educationDetails: {
                        push: newCourse
                    }}
                })

                return resume
            }
        })

        t.nonNull.field('updateCourse', {
            type: 'Resume',
            shield: isAuthenticated(),
            args: {
                resumeId: nonNull(idArg()),
                courseId: nonNull(idArg()),
                course: nonNull(CourseInput)
            },
            resolve: async ( _, { resumeId, courseId, course }, { prisma }) => {
                const resume = await prisma.resume.update({
                    where: { id: resumeId },
                    data: { educationDetails: {
                        updateMany: {
                            where: {id: courseId},
                            data: {
                                ...course
                            }
                        }
                    }}
                })
                return resume
            }
        })

        t.nonNull.field('deleteCourse', {
            type: 'Resume',
            shield: isAuthenticated(),
            args: {
                resumeId: nonNull(idArg()),
                courseId: nonNull(idArg())
            },
            resolve: async (_, { resumeId, courseId }, { prisma }) => {
                const resume = await prisma.resume.update({
                    where: {id: resumeId},
                    data: {educationDetails: { deleteMany: {where: { id: courseId }}}}
                })
                return resume
            }
        })
    }
})