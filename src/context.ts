import { Request } from 'express';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

interface Context {
    prisma: PrismaClient
}


export const context = ({ req }: { req: Request}): Context => {
    return {
        prisma
    }
}
