import { Middleware } from 'koa';
import * as jwt from 'jsonwebtoken';

import * as db from '../db';
import { SessionJWT } from '../../types';

export const requireActiveSession: Middleware = async (ctx, next) => {
    const { cookie } = ctx.headers;
    const splitCookies: string[] = cookie?.split('=') || [];
    const parsedCookies: { [key: string]: string } = {};
    for (let i = 0; i < splitCookies.length; i += 2) {
        parsedCookies[splitCookies[i]] = splitCookies[i + 1];
    }

    const accessToken = parsedCookies['accessToken'];
    if (!accessToken) {
        ctx.body = 'error: no unauthenticated access permitted';
        return;
    }

    const decoded = jwt.verify(
        accessToken,
        process.env.JWT_SIGNATURE!,
    ) as SessionJWT;
    if (!decoded) {
        ctx.body = 'error: invalid token found';
        return;
    }

    const { token } = decoded;
    const prisma = db.get();
    const session = await prisma.session.findFirst({
        where: {
            token,
        },
        select: {
            userId: true,
        },
    });
    if (!session) {
        ctx.body = 'error: no user found for this session';
        return;
    }
    ctx.state.currentUser = session.userId;
    await next();
};
