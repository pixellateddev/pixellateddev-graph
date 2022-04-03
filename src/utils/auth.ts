import { ForbiddenError } from 'apollo-server';
import * as jwt from 'jsonwebtoken';

export const APP_SECRET = process.env.APP_SECRET!


export interface AuthTokenPayload {
    userId: string
}

export function decodeAuthHeader(authHeader: string): AuthTokenPayload {
    const token = authHeader.replace('Bearer ', '')

    if (!token) {
        throw new ForbiddenError('Not Authenticated')
    }

    return jwt.verify(token, APP_SECRET) as AuthTokenPayload
}
