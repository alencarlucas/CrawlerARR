var eventEmitter = require('events').EventEmitter;
var express = require('express');
var app = express();
var json = require('./filmes.json');
//var crawl = require('./crawler.js');
var names = [];
var index = [];
var arrnames = '[';
var fs = require('fs');

for (var i = 0; i < json.length; i++) {
  arrnames += '{"'+ 'nome' + '": "'+ json[i]['nome'] +'"},\n';
  names.push(json[i]['nome']);
  index.push(i);

}
arrnames = arrnames.substring(0, arrnames.length-2)
arrnames += ']';

var stream = fs.createWriteStream("my_file.txt");
stream.once('open', function(fd) {
  stream.write(arrnames+"\n");
  stream.end();
});

app.use(express.static(__dirname + "/public"));


app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');

});

app.get('/search?:id', function (req, res) {
  console.log("search");
  var films = json.filter(function (film) {
      return film['nome'] == req.query.id;
  });

  var text = ''

  res.send(films);
  // var file = '[';
  // console.log((req.query.id));
  // console.log(names.indexOf(req.query.id));
  // for(key in json[names.indexOf(req.query.id)])
  //   file += (key + ": " +json[names.indexOf(req.query.id)][key] + '<br>');
  // file += ']';
  // console.log(file);
  // res.send(file)
  //res.send('id: ' + req.query.id);
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

//crawl.run();
