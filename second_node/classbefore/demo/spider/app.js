var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');
app.get('/', function (req, res) {
  request('http://www.baidu.com', function (error, response, body) {
  if(!error&&response.statusCode == 200){
    console.log('body:', body); // Print the HTML for the Google homepage.
    const $ = cheerio.load(body);
    res.json({
      'class':$('.mnav').length
    });
  }
})
});

var server = app.listen(3000, function () {
  console.log('Example app listening at http://%s:%s');
});
//express request cheerio
//cheerio
//comet  长连接技术
//socket.io
//SSE