var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'indexs.html'))
})
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

io.on("connection",function(socket){
    socket.emit('open');
    socket.on('message',function(msg){
      console.log("服务器接收到客户端的消息"+msg);
    })
    socket.emit('test',"server ready");
    socket.broadcast.emit('test');
    socket.on("wzm",function(msg){
      console.log(111)
      console.log(msg)
    })
})
// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
server.listen(3000,function(){
  console.log("启动成功")
})
module.exports = app;

//问题  
//var app = express()  app.listen
//var app = express() var http=require("ttp") var server =http.createServer(app)  server.listen