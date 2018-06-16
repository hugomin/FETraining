const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));
// app.get("/index/:id/:test",(req,res)=>{
    //req.query  返回一个对象
    //req.parmas  获取路由的参数

    //res.json   res.jsonp   res.redirect  res.cookie  
    //res.download   res.render 
    // console.log(req.query.username)
    // res.send('Hello'+ req.params.id);
    // res.json({
    //     id:123
    // })
// })
app.get('/index',(req,res,next)=>{
    req.data = 123;
    console.log(req.data)
    next();  
},(req,res,next)=>{
    res.sendFile(__dirname+"/views/index.html")
})
app.post('/index',urlencodedParser,function(req,res){
    const keyword = req.body.username;
    res.redirect("http://www.baidu.com/s?wd="+keyword);
})
const server = app.listen(8080,function(){
    console.log('接口已启动')
})
//1.安装并引入express，并启用一个express的实例
//2.app.listen 一个端口启动一个后台服务
//3.app.get   设置基础路由  然后吐出数据
//4.平时的请求都是get 浏览器直接敲
//5 get post  put delete
//restful