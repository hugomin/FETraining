function route(pathname,response) {
  console.log("About to route a request for " + pathname);
  if(pathname === '/'){
  	    response.writeHead(200, {"Content-Type": "text/plain"});
    	response.write("Hello World");
    	response.end();
  }else{
  		response.writeHead(200, {"Content-Type": "text/plain"});
    	response.write("Hello wzm");
    	response.end();
  }
}
 
exports.route = route;