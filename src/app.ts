import Koa from 'koa';
import cors from 'kcors';
import fs from 'fs';

import router from './routes';
import { root } from './config';

const app = new Koa();

router.get('/', (ctx, next) => {
  var file = fs.readFileSync(root('README.md'), 'utf8');

  ctx.body = file.toString();
});

app.use(cors());

app.use(router.routes()).use(router.allowedMethods());

export default app.callback();
