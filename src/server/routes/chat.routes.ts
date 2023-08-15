import Router from 'koa-router';

import { ChatView, ChatListView } from '../../views';
import * as db from '../db';

import { requireActiveSession } from '../middleware';

export enum ChatRoutes {
    CHAT_ID = '/chat/:id', // TODO: find way to parameterize
    CHATS = '/chats',
}

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

    router.get(ChatRoutes.CHATS, requireActiveSession, async (ctx) => {
        const { currentUser } = ctx.state;
        const prisma = db.get();
        const userAndChats = await prisma.user.findFirstOrThrow({
            where: {
                id: currentUser,
            },
            select: {
                name: true,
                chats: true,
            },
        });
        if (!userAndChats) {
            ctx.body = 'error: no user exists for the active session';
            return;
        }

        const { name, chats } = userAndChats!;
        ctx.body = ChatListView({ name, chats });
        console.log(ctx.status);
    });

    router.post(ChatRoutes.CHATS, async (ctx) => {
        const { title, description } = ctx.request.body;

        if (title) {
            const prisma = db.get();
            const chat = await prisma.chat.create({
                data: {
                    title,
                    description,
                    participants: {
                        connect: {
                            id: '1',
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
