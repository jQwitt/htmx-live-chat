import Router from 'koa-router';

import { ChatView, ChatList } from '../../views';
import * as db from '../db';

export async function withChat(router: Router) {
    router.get('/chat/:id', async (ctx) => {
        const { id } = ctx.params;

        const prisma = db.get();
        const chat = await prisma.chat.findFirst({
            where: {
                id,
            },
        });

        if (chat) {
            ctx.body = ChatView({ chat });
        }
    });

    router.get('/chat', async (ctx) => {
        const prisma = db.get();
        const user = await prisma.user.findFirst({
            where: {
                id: 'b8c67f0d-51c8-461a-a22f-8649dbce7541',
            },
            include: {
                chats: true,
            },
        });

        if (user?.chats) {
            ctx.body = ChatList({ chats: user?.chats });
        }
    });
}
