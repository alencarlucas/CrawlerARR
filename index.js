var eventEmitter = require('events').EventEmitter;
var express = require('express');
var app = express();
var crawl = require('./crawler.js');

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.get('/crawl', function(req,res){
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
