import Router from 'koa-router';

import { ChatView, ChatListView } from '../../views';
import * as db from '../db';

export enum ChatRoutes {
    CHAT_ID = '/chat/:id',
    CHAT = '/chat',
}

const CURRENT_USER = 'b8c67f0d-51c8-461a-a22f-8649dbce7541'; // TODO

export async function withChat(router: Router) {
    router.get(ChatRoutes.CHAT_ID, async (ctx) => {
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

    router.delete(ChatRoutes.CHAT_ID, async (ctx) => {
        const { id } = ctx.params;

        const prisma = db.get();
        const chat = await prisma.chat.delete({
            where: {
                id,
            },
        });

        if (chat) {
            ctx.body = '';
        }
    });

    router.get(ChatRoutes.CHAT, async (ctx) => {
        const prisma = db.get();
        const user = await prisma.user.findFirst({
            where: {
                id: CURRENT_USER,
            },
            include: {
                chats: true,
            },
        });

        if (user?.chats) {
            ctx.body = ChatListView({ name: user?.name, chats: user?.chats });
        }
    });

    router.post(ChatRoutes.CHAT, async (ctx) => {
        const { title, description } = ctx.request.body;

        if (title) {
            const prisma = db.get();
            const chat = await prisma.chat.create({
                data: {
                    title,
                    description,
                    participants: {
                        connect: {
                            id: CURRENT_USER,
                        },
                    },
                },
            });

            if (chat) {
                ctx.body = ChatView({ chat });
            }
        }
    });
}
