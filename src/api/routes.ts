import Router from 'koa-router';


const router = new Router();

router.get('/timeout/:ms', async (context, next) => {
   
   const ms = parseInt(context.params.ms, 10);

   const timeoutPromise = new Promise((resolve, reject) => {

      setTimeout(async () => {
         resolve('timeouted');
         console.log({ms})
      }, ms);
   });

   try {
      await timeoutPromise;
      context.body = 'timeouted';
      context.status = 200;
      await next();
   } catch (err) {
      console.log({err})
   }
});


export default router;
