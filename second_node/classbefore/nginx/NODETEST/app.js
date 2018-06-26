var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('服务启动成功', host, port);
});
//save  上线要用
//--save-dev  gulp  上线不用

//npm install --production
//pm2 命令   
//sudo pm2 start pm2.json
//pm2 list
//pm2 logs  pm2 monit监控

//ps aux 
//scp  build.zip root@192.168.0.21:/root/
//unzip
//npm install --production

           start
systemctl status   mariadb mysql（数据库服务的名字）
Active
systemctl stop mariadb
systemctl disable mariadb  enable  