import Router from 'koa-router';
import { HelloWorld } from '../../components/hello-world';

export function useContentEndpoints(router: Router): void {
    router.get('/content/hello', async (ctx) => {
        ctx.body = HelloWorld();
    });
}
