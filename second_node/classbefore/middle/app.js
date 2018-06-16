const express = require('express');
const app = express();
const router = express.Router();
const cookieParser = require('cookie-parser');
router.use(function(req,res,next){
    console.log(123456);
    next();
})
app.use('/',router)
app.get('/index',(req,res,next)=>{
    req.data = 123;
    console.log(req.data)
    next();  
},(req,res,next)=>{
    res.send('hello world')
})
//错误级中间价
app.get('/indexs',(req,res,next)=>{
    req.data = 123;
    console.logsss(1111);
})
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
//内置中间价

//第三方中间价
app.use(cookieParser());
app.use(function(req,res,next){
    req.cookies = function(){
        return {
            data:123
        }
    }
})
app.get('/cookie',(req,res,next)=>{
   console.log(req.cookies().data)
})
const server = app.listen(8080,function(){
    console.log('接口已启动')
})

//应用级中间件  app.use   app.method
//router 没有特别复杂app里的api 只有路由相关的api
//错误处理中间件
//内置中间件  app.use(express.static(public))
//
