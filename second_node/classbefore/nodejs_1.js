console.log('hello,word');
const  http = require('http');
http.createServer((req,res)=>{
	//定义返回头
	res.writeHead(200,{'Content-Type':'text/plan'});
	//发送相应数据
	res.end('hello,word!\n');
}).listen(8000);
//服务运行起来
console.log('server is running......');
