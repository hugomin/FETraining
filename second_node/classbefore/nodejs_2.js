//node  回调函数
const fs = require('fs');
const data = fs.readFileSync('nodejs_1.js');
console.log(data.toString());//js  tostring

//非阻塞代码
fs.readFile('nodejs_1.js',(err,data)=>{
	if(err){
		return console.error(err);
	}
	console.log(data.toString());
})
console.log('代码执行完毕');
