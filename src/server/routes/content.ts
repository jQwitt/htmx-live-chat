import Router from 'koa-router';
import { Hello } from '../../components/hello';
import * as db from '../db';

export async function useContentEndpoints(router: Router) {
    const prisma = db.get();

    const user = await prisma?.user.findFirst();

    router.get('/content/hello', async (ctx) => {
        ctx.body = Hello({ name: user?.name });
    });
}
