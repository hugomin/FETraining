var express = require('express');
var app = express();
//引入mysql
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     :  8888,
  user     : 'root',
  password : 'root',
  database : 'test'
});
connection.connect();
//配置swig
var swig = require('swig');
app.set('view engine','html');
app.use(express.static('public'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
//配置路由
app.get('/index',function(req,res){
    res.render('index',{title:"首页"});
})
app.get('/receive',function(req,res){
    console.log(req.query);
    var post  = {username: req.query.username, password:req.query.password};
    var query = connection.query('INSERT INTO user_table SET ?', post, function (error, results, fields) {
    if (error) {
        console.log(111)
        res.json({
            success:'error',
            msg:"插入失败"
        })
    }else{
        console.log(111)
        res.json({
            success:'ok',
            msg:"插入成功"
        })
    }
    });
    console.log(query.sql);
})
//容错机制
app.get('*',function(req,res){
    res.status(404)
    res.end('404');
})
//
app.use(function(err,req,res,next){
    res.status(500);
    res.end('error')
})

app.listen(3000,function(){
    console.log('server is running')
})