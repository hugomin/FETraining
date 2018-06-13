function Hello(){
	var name;
	this.setName = function(argName){
		name = argName;
	}
	this.sayHello = function(){
		console.log('Hello'+name);
	}
}
//导出  module.exports
module.exports = Hello;