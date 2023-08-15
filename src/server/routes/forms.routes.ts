import Router from 'koa-router';

import { CreateChatForm, LoginForm, RegisterForm } from '../../forms';

export enum FormsRoutes {
    FORMS_CREATE_CHAT = '/forms/create-chat',
    FORMS_REGISTER = '/forms/register',
    FORMS_LOGIN = '/forms/login',
}

export async function withForms(router: Router) {
    router.get(FormsRoutes.FORMS_CREATE_CHAT, async (ctx) => {
        ctx.body = CreateChatForm({});
    });

    router.get(FormsRoutes.FORMS_REGISTER, async (ctx) => {
        ctx.body = RegisterForm({});
    });

    router.get(FormsRoutes.FORMS_LOGIN, async (ctx) => {
        ctx.body = LoginForm({});
    });
}
