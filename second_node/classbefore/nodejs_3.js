//事件驱动模型
//引入event 模块 创建evevtsEmitter对象

var events  = require("events");
var eventEmitter = new events.EventEmitter();
//绑定事件处理函数
var  connctHandler = function connected(){
	console.log('connected被调用');
}
eventEmitter.on('connection',connctHandler);//参数一  事件名称  参数二 函数名称
//出发事件
eventEmitter.emit('connection');
console.log('程序执行完毕')