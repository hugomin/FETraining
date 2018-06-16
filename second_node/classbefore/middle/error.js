var express = require('express');
var app = express();
var swig = require('swig')
app.use(express.static('public'));
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.get('/index',function(req,res){
    res.render('index',{title:"首页",items:['a','b','c']});
})
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}
function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({ error: 'Something blew up!' });
    } else {
        next(err);
    }
}
function errorHandler(err, req, res, next) {
    res.status(500);
    res.end(err.stack)
  }
app.listen(8080, function () {

})
//错误处理方式
//错误处理放在最后
//错误日志 log4js  express-log  404  500  写日志