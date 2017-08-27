var eventEmitter = require('events').EventEmitter;
var express = require('express');
var app = express();

// var insertGuide = require('./insertGuide.js');
//var crawl = require('./crawler.js');
// var urlBuilder = require('./urlBuilder.js');
// var urlModule = require('./urlBuilder.js');

// urlModule.urlBuilder(1,'Bee Movie');
var db = require('./mysql.js');

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

// app.get('/loadLogs', function (req, res) {
//   db.loadFilmeLogs();
// });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

if (false){
	db.loadFilmeLogs();
} else {
	 var textParser = require('./textParser.js');
}




