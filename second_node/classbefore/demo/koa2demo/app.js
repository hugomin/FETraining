const Koa = require('koa');
const app = new Koa();
const router = require('koa-simple-router')
const convert = require('koa-convert');
const path = require('path');
const server = require('koa-static');
const render = require('koa-swig');
const co = require('co');
app.context.render = co.wrap(render({
    root: path.join(__dirname, 'views'),
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    writeBody: false
}));
app.use(router(_ => {
    // _.get('/', (ctx, next) => {
    //     ctx.body = 'hello'
    // })
    _.get('/name', async (ctx, next) => {
        ctx.body = await ctx.render('index');
    })
})
)
app.use(convert(server(path.join(__dirname, '/public'))));
app.listen(3000, () => {
    console.log('server is running')
});
//1.起服务
//2.路由 koa-simple-router  
//3.静态资源文件  koa-static  koa-convert
//4.末班