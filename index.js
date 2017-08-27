var eventEmitter = require('events').EventEmitter;
var express = require('express');
var app = express();
// var textParser = require('./textParser.js');
var insertGuide = require('./insertGuide.js');
//var crawl = require('./crawler.js');
app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
