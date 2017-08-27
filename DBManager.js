var sql = require('./statement.js');
//just for test
var obj = require('./obj.json');

// require the mysql nodejs module
var mysql = require('mysql');

var crawl = require('./crawler');

var urlModule = require('./urlBuilder.js');

// create pool to handle connections
var pool = mysql.createPool({
  host     : 'cafeina.cl5phxsopdwg.us-east-2.rds.amazonaws.com',
  user     : 'cafeina',
  password : 'cafeina123',
  database : 'cafeina',
  connectionLimit : 2000,
});

exports.loadBaseFilms1 = function(){
  var guide = require('./guide.json');
  //console.log('Hits ' + guide.hits);

  var hits = guide.hits;
  var programs = [];
  for (var i in hits) {
    programs.push('("'+hits[i]._source.programTitle+'")');
    //console.log(hits[i]._source.programTitle);
  }


  var values = programs.join();
  pool.getConnection(function(err, connection) {
        try{
          var query = 'INSERT INTO FilmeLog (nome) VALUES '+values;
          console.log(query);
          connection.query(query, function (error, results, fields) {
              if (error) console.log("Lançou excessão mas continuei");
              else console.log("Salvei no db");
          });
        }
        catch(err){
          console.log("Keep going");
        }
    });

}

exports.loadBaseFilms2 = function(){
  var guide = require('./guide.json');
  //console.log('Hits ' + guide.hits);

  var hitsStr =  "O poderoso chefão|O poderoso chefão: Parte II|A lista de Schindler|O Senhor dos Anéis - O Retorno do Rei|Forrest Gump|Clube da Luta|O Senhor dos Anéis – A Sociedade do Anel|Star Wars — O Império Contra-Ataca|Star Wars – Uma Nova Esperança|Matrix|Um estranho no ninho|O Senhor dos Anéis - As Duas Torres|O Profissional|Seven - Os sete crimes capitais|Intocáveis|Era uma vez no Oeste|Amnésia|De Volta para o Futuro|Gladiador|The Dark Knight Rises|Psicose|Indiana Jones and the Raiders of the Lost Ark|Dr. Fantástico|Janela indiscreta|Beleza americana|Django Livre|Star Wars – O Retorno de Jedi|Old Boy|Era uma Vez na América|WALL-E|Um corpo que cai|Baahubali: O início|Bastardos inglórios|Snatch|Scarface|Taxi Driver|Cães de aluguel|Indiana Jones and the Last Crusade|Toy Story - Um Mundo de Aventuras|Amadeus|Los Angeles – Cidade Proibida|Up - Altas aventuras|O Sol é para Todos|Até o Último Homem|O Lobo de Wall Street|Fogo Contra Fogo|Trainspotting, sem limites|Guerreiro|Jogos, trapaças e dois canos fumegantes|O enigma do outro mundo - The thing|Cassino|O Segredo dos seus olhos|Airlift|Os Vingadores - The Avengers|Os Suspeitos|Histórias cruzadas|12 Anos de Escravidão|Onde os fracos não têm vez|Ilha Do Medo|Fargo - Uma Comédia de Erros|A princesa prometida|Donnie Darko|Na Natureza Selvagem|O Jogo da Imitação|Prenda-me se for capaz|O Show de Truman - O Show da Vida|Procurando Nemo|Monstros S.A.|Sempre ao seu Lado|Como treinar o seu dragão|Gandhi|Em Nome do Pai|Paris, Texas|Tropa de Elite|Os Incríveis|Star Trek|Ela|As vantagens de ser invisível|Cisne Negro|Sing Street: música e sonho|Tubarão|Sobre Meninos e Lobos|Distrito 9|Ratatouille|Brazil – O Filme|O Estranho Mundo de Jack|JFK – A Pergunta que não quer Calar|A luta pela esperança|Patton - Rebelde ou Herói?|O escafandro e a borboleta|G.O.R.A|O Abutre|Clube dos cinco|Homem de Ferro|Shrek|Boyhood - Da Infância à Juventude|Na mira do chefe|Tempo de glória|O lutador|Faça a coisa certa|Toy Story 2|O Tigre e o Dragão|Spartacus|O artista|Tudo sobre minha mãe|O Profeta|Os Oito Odiados|A Grande Aposta|Capitão América 2 - O Soldado Invernal|Millennium: Os Homens que Não Amavam as Mulheres|The Sandlot|Curtindo a Vida Adoidado|Orgulho e Preconceito|O Lado Bom da Vida|Como enlouquecer seu chefe|Além da Escuridão - Star Trek|Enrolados|O Curioso Caso de Benjamin Button|Onze homens e um segredo|Duelo de Titãs|O menino do pijama listrado|Detona Ralph|Gilbert Grape - Aprendiz de Um Sonhador|De Volta para o Futuro II|Millennium: Os Homens que não Amavam as Mulheres|Capitão Phillips|O Fantástico Sr. Raposo|The Best Offer|Tempo de despertar|Beasts of No Nation|Kung-fusão|5 Centimeters Per Second|A Espiã|O Rei da Comédia|Ex_Machina - Instinto Artificial|Kick-Ass – Quebrando tudo|Zodíaco|A rede social|Stardust: O mistério da estrela|Meia-noite em Paris|A Teoria de Tudo|Zumbilândia|Coraline e o mundo secreto|O Expresso da Meia-Noite|(500) Dias com Ela|Bonequinha de luxo|O Último Samurai|Senhores do crime|Melhor é Impossível|Sete vidas|Chamas da Vingança|Razão e Sensibilidade|Match Point|As duas faces de um crime|Ponyo - Uma amizade que veio do mar|Adaptação|A Grande Beleza|O Primeiro Amor|A Escolha de Sofia|Eterno Amor|Nebraska|O Natal dos muppets|Psicopata americano|Watchmen - O filme|Superbad – É Hoje|Sicario: Terra de Ninguém|Star Wars – A Vingança dos Sith|Batman|O Que Fazemos nas Sombras|O poderoso chefão: Parte III|O Impossível|Lethal Weapon|Atração Perigosa|Extermínio|Indiana Jones and the Temple of Doom|Colateral|Jogos Vorazes: Em Chamas|Guerra ao Terror|Além da linha vermelha|Harry & Sally - Feitos um Para O Outro|O plano perfeito|Kung Fu Panda|A pele que habito|O Leitor|Operação Invasão|Direito de Amar|Mais Estranho que a Ficção|Fuga de Alcatraz|Philomena|O Pescador de Ilusões|O estranho sem nome|Headhunters|O Grande Mestre 2|Monty Python - O sentido da vida|13 Assassinos|O Mestre Invencível|Scott Pilgrim contra o mundo|O Grande Herói|Gangues de Nova York|O assassinato de Jesse James pelo covarde Robert Ford|Robocop - O Policial do Futuro|A Invenção de Hugo Cabret|A Mosca";
  //console.log(hitsStr);
  var hits = hitsStr.split('|');
  console.log(hits);
  var programs = [];
  for (var i in hits) {
    programs.push('("'+hits[i]+'")');
    //console.log(hits[i]._source.programTitle);
  }


  var values = programs.join();
  console.log(values);
  pool.getConnection(function(err, connection) {
        try{
          var query = 'INSERT INTO FilmeLog (nome) VALUES '+values;
          console.log(query);
          connection.query(query, function (error, results, fields) {
              if (error) console.log("Lançou excessão mas continuei");
              else console.log("Salvei no db");
          });
        }
        catch(err){
          console.log("Keep going");
        }
    });
}

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

exports.updateFilmeLog = function(id,status){
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

exports.createFilmeLog = function(nome,url,fonte){
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
	    connection.query("SELECT id,nome,url,fonte FROM FilmeLog WHERE status = 2 AND url != '' AND url != 'null' order by id LIMIT 5;", function (error, results, fields) {
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

exports.loadFilmeLogs = function(nome,url,fonte){
  pool.getConnection(function(err, connection) {
    try{
      connection.query("SELECT id,nome FROM FilmeLog WHERE status = 2 AND url = ''  LIMIT 500;", function (error, results, fields) {
          if (error) console.log("Lançou excessão mas continuei"+error);
          else {
            console.log("Peguei do db");
            console.log(results);
            // var arr = [];
            for(var i in results){
                //console.log(results[i].id + '  ' +results[i].nome);
                urlModule.urlBuilder(results[i].id,results[i].nome);
                  // arr.push({id:results[i].id,nome:results[i].nome});
             }
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
