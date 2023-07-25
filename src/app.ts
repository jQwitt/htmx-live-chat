import path from 'path';

import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import json from 'koa-json';
import body from 'koa-body';
import serve from 'koa-static';

import { withChat } from './server/routes/chat.routes';
import { withForms } from './server/routes/forms.routes';

const app = new Koa();
const router = new Router();

withChat(router);
withForms(router);

app.use(json());
app.use(logger());
app.use(body());
app.use(router.routes()).use(router.allowedMethods());

app.use(serve(path.join(__dirname, '/public')));

app.listen(3000, () => {
    console.log('server started!');
});
