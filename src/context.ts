import { Request } from 'express';

import { PrismaClient, User } from '@prisma/client';

import { decodeAuthHeader } from './utils/auth';

const prisma = new PrismaClient()

export interface Context {
    prisma: PrismaClient,
    userId?: string,
    user: User
}


export const context = ({ req }: { req: Request}): Context => {
    const token = req && req.headers.authorization ? decodeAuthHeader(req.headers.authorization): null

    return {
        prisma,
        userId: token?.userId,
        user: {
            id: 'Anonymous',
            email: 'Anonymous',
            username: 'Anonymous',
            password: 'Anonymous',
            createdAt: new Date()
        }
    }
}
