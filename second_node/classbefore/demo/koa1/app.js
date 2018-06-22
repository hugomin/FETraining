const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');

const router = new Router();
app.use(async (ctx, next) => {
  const start = Date.now();
  console.log(1)
  await next();
  console.log(2)
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async function pageNotFound(ctx) {
  // we need to explicitly set 404 here
  // so that koa doesn't assign 200 on body=
  console.log(ctx.status);
  if(ctx.status!=404)return;
  ctx.status = 404;
  console.log(3)
  switch (ctx.accepts('html', 'json')) {
    case 'html':
      ctx.type = 'html';
      ctx.body = '<p>Page Not Found</p>';
      break;
    case 'json':
      ctx.body = {
        message: 'Page Not Found'
      };
      break;
    default:
      ctx.type = 'text';
      ctx.body = 'Page Not Found';
  }
});
// // logger
router.get('/index', (ctx, next) => {
  console.log(5)
  ctx.body = 'Hello World';
  console.log(6)
});
// app.use(async (ctx, next) => {
//   const start = Date.now();
//   console.log(3)
//   await next();
//   console.log(4)
//   const ms = Date.now() - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}`);
// });

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000);
//1.新建服务
//2.执行顺序 级联
//3.错误处理  放在最上面
//4.koa-router   
//yo