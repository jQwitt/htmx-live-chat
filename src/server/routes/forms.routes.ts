import Router from 'koa-router';

import { CreateChatForm } from '../../forms/create-chat';

export enum FormsRoutes {
    FORMS_CREATE_CHAT = '/forms/create-chat',
}

export async function withForms(router: Router) {
    router.get(FormsRoutes.FORMS_CREATE_CHAT, async (ctx) => {
        ctx.body = CreateChatForm({});
    });
}
