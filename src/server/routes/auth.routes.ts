import Router from 'koa-router';
import * as jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import * as b from 'bcrypt';

import * as db from '../db';
import { getUserSessionJWT } from '../utils';

export async function withAuth(router: Router) {
    router.post('/register', async (ctx) => {
        const { name, password, confirmPassword } = ctx.request.body || {};

        if (!name || !password || password != confirmPassword) {
            // TODO: move validation to client
            ctx.body = 'invalid request';
            return;
        }
        console.log(name, password);

        const prisma = db.get();
        const sessionId = uuidv4();
        const user = await prisma.user.create({
            data: {
                name,
                password: b.hashSync(password, 2),
                session: {
                    create: {
                        token: sessionId,
                        expires: new Date(),
                    },
                },
            },
        });

        if (!user) {
            ctx.body = 'failed';
        }

        const accessToken = jwt.sign(
            { token: sessionId },
            process.env.JWT_SIGNATURE!,
        );

        ctx.body = `<div _="on load set cookies.accessToken to '${accessToken}'"></div>`;
    });

    router.post('/login', async (ctx) => {
        const { name, password } = ctx.request.body || {};

        if (!name || !password) {
            // TODO: move validation to client
            ctx.body = 'error: invalid request';
            return;
        }

        const prisma = db.get();
        const user = await prisma.user.findFirstOrThrow({
            where: {
                name,
            },
            select: {
                id: true,
                password: true,
            },
        });
        if (!user) {
            ctx.body = 'error: failed to find user';
        }
        const isUser = b.compareSync(password, user.password);
        if (!isUser) {
            ctx.body = 'error: incorrect password';
            return;
        }

        const accessToken = await getUserSessionJWT(user.id);
        ctx.body = `<div _="on load set cookies.accessToken to '${accessToken}'" >success!<button hx-get="/chat">continue</button</div>`;
    });
}
