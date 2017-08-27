var eventEmitter = require('events').EventEmitter;
var express = require('express');
var app = express();
var crawl = require('./crawler.js');

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
});

crawl.run();
