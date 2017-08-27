console.log('Hello parser');

var beeMovie1 = [ 'Bee Movie - A História de uma Abelha',
  'Filme de 2007',
  'A rec&#xE9;m-formada abelha Barry acha a vida de trabalhar com mel desinteressante. Ele voa fora da colmeia pela primeira vez e conversa com um humano, quebrando uma primordial regra de sua esp&#xE9;cie. Barry descobre que humanos t&#xEA;m roubado e comido mel h&#xE1; s&#xE9;culos e decide processar a humanidade.',
  'Data de lançamento: ',
  '7 de dezembro de 2007 (',
  'Brasil',
  ')',
  'Diretor: ',
  'Steve Hickner',
  ', ',
  'Simon J. Smith',
  'Can&#xE7;&#xE3;o original: ',
  'Here Comes the Sun',
  'M&#xFA;sica composta por: ',
  'Rupert Gregson-Williams',
  'Elenco: ',
  'Jerry Seinfeld',
  ', ',
  'Renze Zellweger',
  ', ',
  'Patrick Warburton',
  ', ',
  'mais',
  'Personagens',
  'Barry Bee Benson',
  'Jerry Seinfeld',
  'Vanessa Bloome',
  'Ren&#xE9;e Zellweger',
  'Adam Flayman',
  'Matthew Broderick',
  'Layton T. Montgom...',
  'John Goodman',
  'Bud Ditchwater',
  'Michael Richards',
  'Bee Larry King',
  'Larry King',
  'Pesquisas relacionadas',
  'Os Sem&#x2011;Flor...',
  '2006',
  'O Espanta Tubar&#xF5;es',
  '2004',
  'Formigui...',
  '1998',
  'Madagas... 2: A Grande E...',
  '2008',
  'Kung Fu Panda',
  '2008',
  'Madagas... 3: Os Procurados',
  '2012' ];

var hangover = [ 'wikipt',
  'The Hangover',
  'A Ressaca',
  '&#xA0;(',
  'PT',
  ')',
  'Se Beber, Não Case',
  '&#xA0;(',
  'BR',
  ')',
  'Pôster de lançamento.',
  '&#xA0;',
  'Estados Unidos',
  '2009',
  ' &#x2022; &#xA0;',
  'cor',
  ' &#x2022; &#xA0;',
  '100 ',
  'min',
  '&#xA0;',
  'Direção',
  'Todd Phillips',
  'Produção',
  'Daniel Goldberg',
  'Todd Phillips',
  'Roteiro',
  'Jon Lucas',
  '\nScott Moore',
  'Elenco',
  'Bradley Cooper',
  'Ed Helms',
  'Justin Bartha',
  'Zach Galifianakis',
  'Heather Graham',
  'Sasha Barrese',
  'Jeffrey Tambor',
  'Ken Jeong',
  'Género',
  'Comédia',
  'Música',
  'Christophe Beck',
  'Cinematografia',
  'Lawrence Sher',
  'Edição',
  'Debra Neil-Fisher',
  'Companhia(s) produtora(s)',
  'Legendary Pictures',
  'Distribuição',
  'Warner Bros.',
  'Lançamento',
  ' 5 de junho de 2009',
  ' 18 de junho de 2009',
  ' 21 de agosto de 2009',
  'Idioma',
  'Inglês',
  'Orçamento',
  'US$',
  ' 35 milhões',
  'Receita',
  'US$ 467.483.912',
  'Cronologia',
  'The Hangover: Part II',
  '\n(2011)',
  'Página',
  ' no ',
  'IMDb',
  ' (em inglês)' ];



var sinonimos = {
	lancamento : [
		'Ano de',
		'Lancamento',
		'Lançamento'
	],
	lancamentoOpts : [
			'Filme de',
			'Janeiro',
	    'Fevereiro',
	    'Março',
	    'Abril',
	    'Maio',
	    'Junho',
	    'Julho',
	    'Agosto',
	    'Setembro',
	    'Outubro',
	    'Novembro',
	    'Dezembro'
	],
	diretor : [
		'Diretor',
		'Direção'
	],
	roteiro : [
		'Roteiro'
	],
	elenco : [
		'Elenco'
	],
	produtora : [
	'produtora'
	],
	producao : [
		'Producao',
		'Produção'
	],
	idioma : [
		'Idioma',
		'Idiomas'
	],
	genero : [
		'Género',
		'Genero'
	],
	generoOpts : [
		'comedia',
		'aventura'
	],
	universo : [
		'Cronologia'
	],
	other : [
		'Orçamento',
		'Cinematografia',
		'Edição',
		'Distribuição'
	],
	otherOpts : [
		'$',
		'milhões'
	],
	musicas : [
		'Música',
		'musica'
	],
	min : [
		'min'
	],
	sinonimos : [
		'PT',
		'BR'
	]
}

var filmeProps = {
	'nomeFilme' : {
		'currentKeywords' : []
	},
	'nomeOriginal' :{},  
	'franquia' : {},
	'universo' : {
		'upcomingKeywords' : sinonimos.universo
	}, 
	'sinonimos' : {
		'passedKeywords' : sinonimos.sinonimos
	}, 
	'trilhaSonora' : {
		'upcomingKeywords' : sinonimos.musicas
	}, 
	'produtoras' : {
		'upcomingKeywords' : sinonimos.produtora
	}, 
	'anoLancamento' : {
		'currentKeywords' : sinonimos.lancamentoOpts
	}, 
	'duracao' : {
		'passedKeywords' : sinonimos.min
	}, 
	'classificacao' : {}, 
	'idiomaOriginal' : {
		'upcomingKeywords' : sinonimos.idioma
	}, 
	'idiomas' : {}, 
	'livro' : {}, 
	'sinopse' : {
		'currentKeywords' : []
	}, 
	'genero' : {
		'upcomingKeywords' : sinonimos.genero, 
		'currentKeywords' : sinonimos.generoOpts,

	}, 
	'keywords' : {}, 
	'tema' : {}, 
	'direcao' : {
		'upcomingKeywords' : sinonimos.diretor 
	}, 
	'criacao' : {}, 
	'producao' : {
		'upcomingKeywords' : sinonimos.producao 
	}, 
	'roteiro' : {
		'upcomingKeywords' : sinonimos.roteiro 
	}, 
	'isSerie' : {}, 
	'status' : {}, 
	'numeroTemporadas' : {}, 
	'numeroEpisodios' : {}, 
	'duracaoMediaEpisodios' : {},
	'elenco' : {
		'upcomingKeywords' : sinonimos.elenco
	}, 
	'other' : {
		'upcomingKeywords' : sinonimos.other, 
		'currentKeywords' : sinonimos.otherOpts,
	}
};

function isIncludedInKeyWords(keywords,text) {
	//console.log('i');
	if (Array.isArray(keywords)) {
		//console.log('--- '+keywords + ' '+ text);
		for (var i in keywords) {
			if (text.toLowerCase().includes(keywords[i].toLowerCase())) {
				// console.log('EQUAAALS'+text.toLowerCase()+' '+keywords[i].toLowerCase());
				// console.log('true');
				return keywords[i].toLowerCase();
			}
		}
	}
	//console.log('false');
	return null;
}

function addValue(returnArray,filmeProp,value,keyword = null,secondaryKeyword = null){
	if (!returnArray[keyword]) {
		returnArray[keyword] = '';
	}
	if (keyword && keyword.includes('other')){
		//filmeProp['value'] += secondaryKeyword + ' : ' + value + '|';
		returnArray[keyword] += secondaryKeyword + ' : ' + value + '|';
	} else {
		//filmeProp['value'] += value + '|';
		returnArray[keyword] += value + '|';
	}
	
}

var artigoSin = [
	' a ',
	' e ',
	'mais'
]

var allKeywords = [];

function isKeyword(text) {
	if (text) {
		for (var i in allKeywords) {
		if (text.toLowerCase().includes(allKeywords[i].toLowerCase())) {
					return true;
				}
		}
	}
	return false;
}

function isPerson(text){
	if (isKeyword(text)) {
		return false;
	}
	return true;

}

function parse(title,textArray){
	// console.log("Title"+title);
	

	for (var key in sinonimos) {
		// console.log(key+' = '+sinonimos[key]);
		allKeywords = allKeywords.concat(sinonimos[key]);
	}

	Object.keys(filmeProps).forEach(function(key) {
		filmeProps[key]['value'] = '';
	});
	
	var textArray = textArray.filter(function (text) {
		return !text.includes('&#x');
	});

	// console.log(textArray);
	// console.log(textArray);
	filmeProps['nomeFilme']['currentKeywords'].push(title);

	var getNextPerson = { get:false,key:null,secondaryKey:null};

	var returnArray = [];

	for (var index in textArray) {
		var text = textArray[index];
		if (getNextPerson.get && isPerson(text)){
			addValue(returnArray,filmeProps[getNextPerson.key],text,getNextPerson.key,getNextPerson.secondaryKey);
		} else {
			getNextPerson.get = false;
			getNextPerson.key = null;
			getNextPerson.secondaryKey = null;
			Object.keys(filmeProps).forEach(function(key) {
				var currentKeyword = isIncludedInKeyWords(filmeProps[key]['currentKeywords'],text);
				var upcomingKeyword = isIncludedInKeyWords(filmeProps[key]['upcomingKeywords'],text);
				var passedKeyword = isIncludedInKeyWords(filmeProps[key]['passedKeywords'],text);
				if(currentKeyword){
					addValue(returnArray,filmeProps[key],text,key);
				} else if (upcomingKeyword) {
					// console.log('getNextPerson');
					getNextPerson.get = true;
					getNextPerson.key = key;
					getNextPerson.secondaryKey = upcomingKeyword;
				} else if (passedKeyword) {
					var passedText = textArray[index-1];
					if (!isKeyword(passedText)){
						addValue(returnArray,filmeProps[key],passedText,key);
					}
				}
			});
		}
	}
	return returnArray;

}

// var result = parse('Hangover',hangover);
// console.log(result);