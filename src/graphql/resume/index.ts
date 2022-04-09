import { extendType, idArg, nonNull, stringArg } from 'nexus';

import { prisma } from '@prisma/client';

import { isAuthenticated } from '../../rules';
import { PersonalDetailsInput } from './types';

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

        t.nonNull.field('editPersonalDetails', {
            shield: isAuthenticated(),
            type: 'Resume',
            args: {
                resumeId: nonNull(idArg()),
                personalDetails: nonNull(PersonalDetailsInput)
            },
            resolve: async (_, { resumeId, personalDetails }, {prisma, user}) => {
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
    }
})