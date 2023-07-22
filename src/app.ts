import path from 'path';

import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import json from 'koa-json';
import serve from 'koa-static';

import { useContentEndpoints } from './server/routes/content';
import * as db from './server/db';

const app = new Koa();
const router = new Router();

db.init();

useContentEndpoints(router);

app.use(json());
app.use(logger());
app.use(router.routes()).use(router.allowedMethods());

app.use(serve(path.join(__dirname, '/public')));

app.listen(3000, () => {
    console.log('server started!');
});
