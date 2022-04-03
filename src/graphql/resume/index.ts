import { extendType, nonNull, stringArg } from 'nexus';

import { isAuthenticated } from '../../rules';

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
    }
})