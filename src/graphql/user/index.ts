import { extendType, nonNull, stringArg } from 'nexus';
import { allow } from 'nexus-shield';

import { isAuthenticated } from '../../rules';

export * from './types'

export const UserQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.field('users', {
            type: 'User',
            async resolve(_, __, { prisma }) {
                return await prisma.user.findMany({})
            }
        })

        t.field('user', {
            shield: isAuthenticated(),
            type: 'User',
            args: {
                id: nonNull(stringArg())
            },
            async resolve(_, { id }, { prisma }) {
                return await prisma.user.findUnique({where: { id }})
            }
        })

        t.field('me', {
            shield: isAuthenticated(),
            type: 'User',
            async resolve(_, __ , { user }) {
                return user
            }
        })
    }
})