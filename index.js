var eventEmitter = require('events').EventEmitter;
var express = require('express');
var app = express();
// var crawl = require('./crawler.js');
var adorocinema = require('./adorocinema.js');

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});