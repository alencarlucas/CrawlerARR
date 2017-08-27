var sql = require('./statement.js');
//just for test
var obj = require('./obj.json');

// require the mysql nodejs module
var mysql = require('mysql');

var crawl = require('./crawler');


// create pool to handle connections
var pool = mysql.createPool({
  host     : 'cafeina.cl5phxsopdwg.us-east-2.rds.amazonaws.com',
  user     : 'cafeina',
  password : 'cafeina123',
  database : 'cafeina',
  connectionLimit : 1000,
});


exports.insert = function(obj){
  pool.getConnection(function(err, connection) {
    try{
      connection.query(sql.insert(obj), function (error, results, fields) {
        if (error) console.log("Lançou excessão mas continuei");
        else console.log("Salvei no db");
      });
    }
    catch(err){
      console.log("Keep going");
    }
  });
}

exports.insertFilme = function(filmeName,filmeid){
    pool.getConnection(function(err, connection) {
    try{
      connection.query("INSERT INTO (id,nome) 'cafeina'.'Filme' VALUES ('" + filmeName + "', '" + filmeid + "');", function (error, results, fields) {
        if (error) console.log("Lançou excessão mas continuei");
        else console.log("Salvei no db");
      });
    }
    catch(err){
      console.log("Keep going");
    }
  });
}

exports.selectFilmeLog = function(){
  pool.getConnection(function(err, connection) {
	  try{
	    connection.query("SELECT id,nome,url,fonte FROM FilmeLog WHERE fonte = 'adorocinema' AND status = 2 AND url != '' AND url != 'null' LIMIT 5;", function (error, results, fields) {
	        if (error) console.log("Lançou excessão mas continuei"+error);
	        else {
	        	console.log("Peguei do db");
	        	console.log(results);
	        	var arr = [];
	        	for(var i in results){
	        			//console.log(results[i].id + '  ' +results[i].nome);
	        			arr.push({id:results[i].id,nome:results[i].nome,url:results[i].url,fonte:results[i].fonte});
	                // arr.push({id:results[i].id,nome:results[i].nome});
	           }
             crawl.queueInsert(arr);
	           // console.log(arr);
	        }
	    });
	  }
	  catch(err){
	    console.log("Keep going");
	  }
	 });
}

module.export = 'use strict';
