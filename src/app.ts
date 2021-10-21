import Koa from 'koa';
import cors from 'kcors';

import router from './routes';

const app = new Koa();

router.get('/', (ctx, next) => {
  console.log('router');
});

app.use(cors());

app.use(router.routes()).use(router.allowedMethods());

export default app;
