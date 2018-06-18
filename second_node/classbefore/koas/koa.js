var koa = require('koa');
var app = new koa();
app.keys = ['abc',"def"];
app.use(function * (){  
    if(this.request.path === '/test'){
        this.body = '123';
        console.log(this.request.query);
    }else{
        this.throw(404,'not found');
    }
})
app.listen(3000)
// const Koa = require('koa');
// const app = new Koa();

// // x-response-time

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   ctx.set('X-Response-Time', `${ms}ms`);
// });

// // logger

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}`);
// });

// // response

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

//中间件级联 yield  自下向上
//app.env  NODE_ENV    development
//app.proxy true
//app.keys = []
//this.res  this.req 
//this.throw
//this.lastModified  this.etag
//request

//this.req.header this.method this.req.path 
//this.request.type    this.request.query
//this.req.fresh  this.request.subdomains

//response
//this.response.header