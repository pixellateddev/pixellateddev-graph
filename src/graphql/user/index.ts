import { extendType, nonNull, stringArg } from 'nexus';

export * from './types'

export const UserQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('listUsers', {
            type: 'User',
            async resolve(parent, args, context) {
                return await context.prisma.user.findMany({})
            }
        })

        t.field('getUser', {
            type: 'User',
            args: {
                id: nonNull(stringArg())
            },
            async resolve(_, { id }, context) {
                return await context.prisma.user.findUnique({where: { id }})
            }
        })
    }
})