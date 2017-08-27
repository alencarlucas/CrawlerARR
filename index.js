var eventEmitter = require('events').EventEmitter;
var express = require('express');
var app = express();
var crawl = require('./crawler.js');

var ConsoleLogHTML = require('console-log-html');

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.get('/loadBase', function (req, res) {
  crawl.loadBaseFilms();
  res.send('ok, para mais informações veja os logs');
});

app.get('/processUrls', function (req, res) {
  crawl.processUrls();
  res.send('ok, para mais informações veja os logs');
});

app.get('/processFilms', function (req, res) {
  crawl.processFilms();
 	res.send('ok, para mais informações veja os logs');
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});


