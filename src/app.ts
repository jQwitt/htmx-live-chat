import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import json from 'koa-json';

import { HelloWorld } from './components/hello-world';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = HelloWorld();

    await next();
});

app.use(json());
app.use(logger());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('server started!');
});
