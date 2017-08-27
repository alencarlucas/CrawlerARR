var Crawler = require("crawler");
var iconv = require('iconv-lite');
var textParser = require('./textParser.js');
var db = require('./DBManager.js');

var selector = {'google':'#rhs_block','wikipedia':'.infobox_v2','adorocinema': '#content-start .col-left' };
var k = 0;
var c = new Crawler({
    maxConnections : 300,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        try{
          if(error){
              console.log("azedou");
              console.log(error);
          }else{
            var $ = res.$;
            //console.log($(selector[res.options.fonte]).html());
            //console.log($(selector[res.options.fonte]).text());
            var arrayData = removeTags($(selector[res.options.fonte]).html().trim());
            arrayData.splice(0,0,res.options.fonte);
            if(res.options.fonte == 'adorocinema')
              for(i in arrayData){
                arrayData[i] = arrayData[i].trim();

              }
              //arrayData = eraseChar(arrayData,'');
            console.log(arrayData);
            console.log(++k);
            //console.log("OLHAQUELEGAL&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
            //console.log(arrayData);
            //console.log("jAFOI&&&&&&&&&&&&&&&&&&&&&&&&&&&&");

            db.insert(textParser.parse(res.options.nome,arrayData,res.options.id,res.options.fonte));
            db.updateFilmeLog(res.options.id,'1');
            //db.insertFilme(res.options.nome,res.options.id);
          }
          done();
        }
        catch(error){
          console.log("NAO ACHOU CALLBACK "+ error + res.options.url);
        }
    }
});

// Queue just one URL, with default callback
exports.processFilms = function(){
  db.selectFilmeLog();
}

exports.processUrls = function(){
  db.loadFilmeLogs();
}

exports.loadBaseFilms = function(){
    console.log('loadBaseFilms');
  // db.loadBaseFilms1();
  // db.loadBaseFilms2();
}

exports.queueInsert = function(elements){
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    c.queue(elements);
}
// c.queue(
//   [
//     {
//       url:'https://pt.wikipedia.org/wiki/Bee_Movie',
//       parameter1:'wikipt',
//       parameter2:'.infobox_v2',
//       parameter3:'Bee Movie'
//     },
//     {
//         url:'https://pt.wikipedia.org/wiki/The_Hangover',
//         parameter1:'wikipt',
//         parameter3:'Hangover',
//         parameter2:'.infobox_v2',
//       }
//     ]
//   );

    function encode_utf8( s ){
        return unescape( encodeURIComponent( s ) );
    }
/*
  Função utilizada para remover as tag <> do html
*/
function removeTags(s){
  var flagErase = true;

  s = lixo(s);
  s = s.substring(1);
  for (var i = 0; i < s.length;) {
    //console.log("i = " + i + " " + " " + flagErase + " "+ s);
    if(s.charAt(i) == '<'){
      flagErase = true;
    }
    else if (s.charAt(i) == '>') {
        s = s.substring(0,i)+ '|' + s.substring(i+1);
      flagErase = false;
    }
    if(flagErase == true){
      if(i != 0)
        s = s.substring(0,i) + s.substring(i+1);
      else
        s = s.substring(1);
    }
    else {
      i++;
    }
  }
  return splitNotNull(s);
}

/*

*/
function splitNotNull(s){
  var arr = s.split('|');
  for( let i of ["", '\n']){
    eraseChar(arr, i);
  }


  return arr;
}



function eraseChar(arr, c){
  var index = arr.indexOf(c);
  while (index > -1) {
    arr.splice(index, 1);
    index = arr.indexOf(c);
  }

}

/*

*/
function lixo(s){
  s = replaceAll(s,'&#xC1;',	"Á");
  s = replaceAll(s,'&#xC2;',	'Â');
  s = replaceAll(s,'&#xC3;',	'Ã');
  s = replaceAll(s,'&#xC4;',	'Ä');
  s = replaceAll(s,'&#xC5;',	'Å');
  s = replaceAll(s,'&#xC6;',	'Æ');
  s = replaceAll(s,'&#xC7;',	'Ç');
  s = replaceAll(s,'&#xC8;',	'È');
  s = replaceAll(s,'&#xC9;',	'É');
  s = replaceAll(s,'&#xCA;',	'Ê');
  s = replaceAll(s,'&#xCB;',	'Ë');
  s = replaceAll(s,'&#xCC;',	'Ì');
  s = replaceAll(s,'&#xCD;',	'Í');
  s = replaceAll(s,'&#xCE;',	'Î');
  s = replaceAll(s,'&#xCF;',	'Ï');
  s = replaceAll(s,'&#xD0;',	'Ð');
  s = replaceAll(s,'&#xD1;',	'Ñ');
  s = replaceAll(s,'&#xD2;',	'Ò');
  s = replaceAll(s,'&#xD3;',	'Ó');
  s = replaceAll(s,'&#xD4;',	'Ô');
  s = replaceAll(s,'&#xD5;',	'Õ');
  s = replaceAll(s,'&#xD6;',	'Ö');
  s = replaceAll(s,'&#xD7;',	'×');
  s = replaceAll(s,'&#xD8;',	'Ø');
  s = replaceAll(s,'&#xD9;',	'Ù');
  s = replaceAll(s,'&#xDA;',	'Ú');
  s = replaceAll(s,'&#xDB;',	'Û');
  s = replaceAll(s,'&#xDC;',	'Ü');
  s = replaceAll(s,'&#xDD;',	'Ý');
  s = replaceAll(s,'&#xDE;',	'Þ');
  s = replaceAll(s,'&#xDF;',	'ß');
  s = replaceAll(s,'&#xE0;',	'à');
  s = replaceAll(s,'&#xE1;',	'á');
  s = replaceAll(s,'&#xE2;',	'â');
  s = replaceAll(s,'&#xE3;',	'ã');
  s = replaceAll(s,'&#xE4;',	'ä');
  s = replaceAll(s,'&#xE5;',	'å');
  s = replaceAll(s,'&#xE6;',	'æ');
  s = replaceAll(s,'&#xE7;',	'ç');
  s = replaceAll(s,'&#xE8;',	'è');
  s = replaceAll(s,'&#xE9;',	'é');
  s = replaceAll(s,"&#xEA;",	"ê");
  s = replaceAll(s,'&#xEB;',	'ë');
  s = replaceAll(s,'&#xEC;',	'ì');
  s = replaceAll(s,'&#xED;',	'í');
  s = replaceAll(s,'&#xEE;',	'î');
  s = replaceAll(s,'&#xEF;',	'ï');
  s = replaceAll(s,'&#xF0;',	'ð');
  s = replaceAll(s,'&#xF1;',	'ñ');
  s = replaceAll(s,'&#xF2;',	'ò');
  s = replaceAll(s,'&#xF3;',	'ó');
  s = replaceAll(s,'&#xF4;',	'ô');
  s = replaceAll(s,'&#xF5;',	'õ');
  s = replaceAll(s,'&#xF6;',	'ö');
  s = replaceAll(s,'&#xF7;',	'÷');
  s = replaceAll(s,'&#xF8;',	'ø');
  s = replaceAll(s,'&#xF9;',	'ù');
  s = replaceAll(s,'&#xFA;',	'ú');
  s = replaceAll(s,'&#xFB;',	'û');
  s = replaceAll(s,'&#xFC;',	'ü');
  s = replaceAll(s,'&#xFD;',	'ý');
  s = replaceAll(s,'&#xFE;',	'þ');
  s = replaceAll(s,'&#xFF;',	'ÿ');
  return s;
}

function replaceAll(str, find, replace) {
    var index = str.search(find);
    while (index > -1) {
      str = str.replace(find, replace)
      index = str.search(find);
    }
    return str;
}
// Queue a list of URLs
//c.queue(['http://www.google.com/','http://www.yahoo.com']);

// Queue URLs with custom callbacks & parameters
/*c.queue([{
    uri: 'http://parishackers.org/',
    jQuery: false,

    // The global callback won't be called
    callback: function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            console.log('Grabbed', res.body.length, 'bytes');
        }
        done();
    }
}]);*/

// Queue some HTML code directly without grabbing (mostly for tests)

/*
Bee Movie - A História de uma Abelha
2007 ‧ Aventura/Comédia ‧ 1h 35m
A recém-formada abelha Barry acha a vida de trabalhar com mel desinteressante. Ele voa fora da colmeia pela primeira vez e conversa com um humano, quebrando uma primordial regra de sua espécie. Barry descobre que humanos têm roubado e comido mel há séculos e decide processar a humanidade.
Data de lançamento: 7 de dezembro de 2007 (Brasil)
Direção: Steve Hickner, Simon J. Smith
Canção original: Here Comes the Sun
Música composta por: Rupert Gregson-Williams
Elenco: Jerry Seinfeld, Renée Zellweger, Patrick Warburton,
(text)

Bee Movie
A História de uma Abelha (PT)
Bee Movie - A História de uma Abelha (BR)

 Estados Unidos
2007 •  cor •  91 min
Direção	Steve Hickner / Simon J. Smith
Produção	Jerry Seinfeld
Christina Steinberg
Cameron Stevning
Roteiro	Jerry Seinfeld
Andy Robin
Barry Marder
Spike Feresten
Narração	Jim Cummings
Elenco	Jerry Seinfeld
Renée Zellweger
Matthew Broderick
John Goodman
Patrick Warburton
Chris Rock
Kathy Bates
Barry Levinson
Larry King
Ray Liotta
Sting
Oprah Winfrey
Larry Miller
Megan Mullally
Rip Torn
Género	comédia
aventura
animação
Companhia(s) produtora(s)	DreamWorks Animation
Columbus 18 Productions
Distribuição	Paramount Pictures
Lançamento	Estados Unidos 2 de Novembro de 2007
Brasil 7 de Dezembro de 2007
Portugal 13 de Dezembro de 2007
Idioma	Inglês
Orçamento	US$ 150 milhões
Receita	US$ 287 594 577

*/
module.export = 'rocali';
