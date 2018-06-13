//调用Hello 模块
var Hello = require('./hello');
hello = new Hello();
hello.setName('wzm');
hello.sayHello();