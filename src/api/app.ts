import Koa from 'koa';
import cors from 'kcors';
import fs from 'fs';

import router from './routes';
import { root } from '../config';

const app = new Koa();

const file = fs.readFileSync(root('README.md'), 'utf8');
router.get('/', (ctx, next) => {

  ctx.body = file.toString();
});

app.use(cors());

app.use(router.routes()).use(router.allowedMethods());

export default app.callback();
