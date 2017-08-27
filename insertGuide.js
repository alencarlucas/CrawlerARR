console.log('Insert Guide');



// var programs = Par

// console.log(programs["hits"]);

var guide = require('./guide.json');
//console.log('Hits ' + guide.hits);

var hits = guide.hits;
var programs = [];
for (var i in hits) {
	programs.push('("'+hits[i]._source.programTitle+'")');
	//console.log(hits[i]._source.programTitle);
}

var values = programs.join();

var eventEmitter = require('events').EventEmitter;
var express = require('express');
var app = express();
//just for test
// var obj = require('./obj.json');

// require the mysql nodejs module
mysql = require('mysql'),

// create pool to handle connections
pool = mysql.createPool({
  host     : 'cafeina.cl5phxsopdwg.us-east-2.rds.amazonaws.com',
  user     : 'cafeina',
  password : 'cafeina123',
  database : 'cafeina'
});

app.use(express.static(__dirname + "/public"));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

// pool.getConnection(function(err, connection) {
//   try{
//     connection.query("SELECT id,nome FROM FilmeLog WHERE status = 2 LIMIT 100;", function (error, results, fields) {
//         if (error) console.log("Lançou excessão mas continuei"+error);
//         else {
//         	console.log("Peguei do db");
//         	console.log(results);
//         	var arr = [];
//         	for(var i in results){
//                 arr.push({id:results[i].id,nome:results[i].nome});
//            }
//            console.log(arr);
//         }
//     });
//   }
//   catch(err){
//     console.log("Keep going");
//   }
//  });
function updateFilmeLog(id,status){
	pool.getConnection(function(err, connection) {
        try{
        	var query = 'UPDATE FilmeLog SET status="'+status+'" WHERE id="'+id+'";';
          connection.query(query, function (error, results, fields) {
              if (error) console.log("Error"+error+query);
              else console.log("Saved!");
          });
        }
        catch(err){
          console.log("Keep going");
        }
    });
}

function createFilmeLog(nome,url,fonte){
	pool.getConnection(function(err, connection) {
        try{
        	var query = 'INSERT INTO FilmeLog (nome,url,fonte) VALUES ("'+nome+'","'+url+'","'+fonte+'");';
          connection.query(query, function (error, results, fields) {
              if (error) console.log("Error"+error+query);
              else console.log("Saved!");
          });
        }
        catch(err){
          console.log("Keep going");
        }
    });
}

createFilmeLog('Bee','fakeurl','1');
updateFilmeLog(2848,5);

// app.listen(3001, function () {
//   console.log('Example app listening on port 3000!');
//   pool.getConnection(function(err, connection) {
//         try{
//         	var query = 'INSERT INTO FilmeLog (nome) VALUES '+values;
//         	console.log(query);
//           connection.query(query, function (error, results, fields) {
//               if (error) console.log("Lançou excessão mas continuei");
//               else console.log("Salvei no db");
//           });
//         }
//         catch(err){
//           console.log("Keep going");
//         }
//     });
// });

// for (var i in programs['hits']) {
// 	console.log(i);
// }