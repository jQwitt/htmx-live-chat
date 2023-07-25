import Router from 'koa-router';

// import * as db from '../db';

export enum MessagesRoutes {
    MESSAGES_CHATID_USERID = '/messages/:chatId/:userId', // TODO: update path with send
}

export async function withMessages(router: Router) {
    router.post(MessagesRoutes.MESSAGES_CHATID_USERID, async (ctx) => {
        console.error(ctx.request.body);

        ctx.body = '';
    });
}
