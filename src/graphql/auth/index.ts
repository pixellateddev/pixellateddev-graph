export * from './types'
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { extendType, nonNull, stringArg } from 'nexus';

import { APP_SECRET } from '../../utils/auth';

export const AuthMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.nonNull.field('signup', {
            type: 'AuthPayload',
            args: {
                email: nonNull(stringArg()),
                password: nonNull(stringArg())
            },
            async resolve(_, args, context) {
                const { email, password } = args
                const hashedPassword = await bcrypt.hash(password, 10)

                const user = await context.prisma.user.create({
                    data: {
                        email, password: hashedPassword
                    }
                })

                const token = jwt.sign({ userId: user.id }, APP_SECRET)

                return {
                    token,
                    tokenType: 'bearer',
                    user
                }
            }
        })

        t.nonNull.field('login', {
            type: 'AuthPayload',
            args: {
                email: nonNull(stringArg()),
                password: nonNull(stringArg())
            },
            async resolve(_, args, context) {
                const user = await context.prisma.user.findUnique({
                    where: { email: args.email }
                })

                if (!user) {
                    throw new Error("Invalid Credentials")
                }

                const valid = await bcrypt.compare(args.password, user.password)
                if (!valid) {
                    throw new Error("Invalid Credentials")
                }

                const token = jwt.sign({ userId: user.id }, APP_SECRET)
                
                return {
                    token,
                    tokenType: 'bearer',
                    user
                }
            }
        })
    }
})