var Crawler = require("crawler");

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log("azedou");
            console.log(error);
        }else{
          var $ = res.$;
          //console.log(utf8('cabeção'));
          //console.log($);
          console.log(removeTags($('#rhs_block').html()));
          //console.log(removeTags("<asd>123</rtff><ddfdf><><dfdfdf>12323<>"));
        }
        done();
    }
});

// Queue just one URL, with default callback
c.queue('https://www.google.com.br/search?q=Bee Movie a historia de uma abelha');

function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}

function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}

function removeTags(s){
  var flagErase = true;
  s = s.substring(1);
  //console.log("DEU " + s.charAt(0));
  for (var i = 0; i < s.length;) {
    //console.log("i = " + i + " " + " " + flagErase + " "+ s);
    if(s.charAt(i) == '<'){
      flagErase = true;
    }
    else if (s.charAt(i) == '>') {
      flagErase = false;
      s = s.substring(0,i)+ '|' + s.substring(i+1);
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
    console.log('\n\n\n\n\n\n\n\n\n\n\n');
    return splitNotNull(s);
}

function splitNotNull(s){
  var arr = s.split('|');
  var index = arr.indexOf("");
  while (index > -1) {
    arr.splice(index, 1);
    index = arr.indexOf('');
  }
  return arr;
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
