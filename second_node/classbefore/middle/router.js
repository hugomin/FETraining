var express = require('express');
var app = express();
var birds = require("./birds");
app.all('/index',function(req,res,next){
    console.log(111)
    next();
},function(req,res,next){
    res.send("hello,word");//页面到这
    next();
},function(req,res,next){
    console.log('我是结尾')
})
// app.route('/book').get(function(){

// }).post(function(){}).put(function(){

// })
app.use("/birds",birds);
// app.get("/indexs",[cb0,cb1],function(){})  数组直接直接写按顺序也可以
app.listen(8080,function(){
    console.log('服务启动')
})

// about/index
//about  根路由
//res.json   res.render  res.redirect
