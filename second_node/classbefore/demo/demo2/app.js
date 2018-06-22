var express = require('express');
var app = express();
//引入mysql
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port     :  8889,//端口号 8889
  user     : 'root',
  password : 'root',
  database : 'test'
});
connection.connect(function(err){
    console.log('test')
    if(err){
        console.log(err);
        return
    }else{
        console.log('数据库连接成功');
    }
});
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
    var post  = {username: req.query.username, password:req.query.password};
    var query = connection.query('INSERT INTO user_table SET ?', post, function (error, results, fields) {
    if (error) {
        console.log(error) 
        res.json({
            success:'error',
            msg:"插入失败"
        })
    }else{
        res.json({
            success:'ok',
            msg:"插入成功"
        })
    }
    });
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
    console.log('server1 is running')
})