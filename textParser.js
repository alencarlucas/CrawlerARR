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
'Física Divertida|Física Divertida é um programa educativo formado a partir de parceria entre a TV Rá-Tim-Bum e a Mad Science São Paulo. O programa estreou em agosto de 2010. No ano de 2011 está em sua segunda temporada e é dirigido por Mário Masetti. |',
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

var program = [ 'Movie Talk',
  'Programa de TV',
  'Primeiro episódio: ',
  'setembro de 2012',
  'Episódio final: ',
  'novembro de 2012',
  'Número De Temporadas: ',
  '1',
  'Emissora original: ',
  'RTÉ One',
  'Número De Episódios: ',
  '10',
  'Gênero: ',
  'Entrevista',
  'Local: ',
  'RTÉ Television Centre',
  ', ',
  'Donnybrook, Dublin',
  ', ',
  'Dublin 4',
  ', ',
  'Irlanda' ];

var guardioes = [ 'Guardiões da Galáxia',
  'Filme de 2014',
  'O aventureiro do espaço Peter Quill torna-se presa de caçadores de recompensas depois que rouba a esfera de um vilão traiçoeiro, Ronan. Para escapar do perigo, ele faz uma aliança com um grupo de quatro extraterrestres. Quando Quill descobre que a esfera roubada possui um poder capaz de mudar os rumos do universo, ele e seu grupo deverão proteger o objeto para salvar o futuro da galáxia.',
  'Data de lançamento: ',
  '31 de julho de 2014 (',
  'Brasil',
  ')',
  'Direção: ',
  'James Gunn',
  'Duração: ',
  '2h 2m',
  'Música composta por: ',
  'Tyler Bates',
  'Canção original: ',
  'Come and Get Your Love',
  'Elenco',
  'Chris Pratt',
  'Senhor das Estrelas',
  'Zoë Saldaña',
  'Gamora',
  'James Gunn',
  'Maskless Sakaaran',
  'Dave Batista',
  'Drax, O Destruidor',
  'Vin Diesel',
  'Groot',
  'Michael Rooker',
  'Yondu',
  'Pesquisas relacionadas',
  'Guardiões da Galáxia Vol. 2',
  '2017',
  'Vingador... Era de Ultron',
  '2015',
  'Os Vingador... The Aven...',
  '2012',
  'Homem&#x2011;F...',
  '2015',
  'Thor: O Mundo Sombrio',
  '2013',
  'Capitão América 2: O Soldad...',
  '2014' ];

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
	criador : [
		'Criador'
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
		'Idiomas',
		'Pais',
		'País'
	],
	genero : [
		'Género',
		'Genero',
		'Gênero'
	],
	generoOpts : [
		'comedia',
		'aventura',
		'Terror',
		'Comédia', 
		'ação',
		'acao', 
		'Fantasia',
		'drama', 
		'policial'
	],
	universo : [
		'Cronologia'
	],
	musicas : [
		'Música',
		'musica',
		'Canção'
	],
	min : [
		'min'
	],
	duracao : [
		'Duração',
		'Duracao'
	],
	sinonimos : [
		'PT',
		'BR'
	],
	numTemporadas : [
		'Temporadas',
	],
	numEpisodios : [
		'Episódios',
	],
	isSerie : [
		'Temporadas',
		'Episódios',
	],
	other : [
		'Orçamento',
		'Cinematografia',
		'Edição',
		'Distribuição',
		'Emissora',
		'Local',
		'Emissora',
		'Período',
		'Gravador',
		'relacionada',
		'relacionado'
	],
	otherOpts : [
		'$',
		'milhões'
	],
	livro : [
	'Livro'
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
		'passedKeywords' : sinonimos.min,
		'upcomingKeywords' : sinonimos.duracao
	}, 
	'classificacao' : {}, 
	'idiomaOriginal' : {
		'upcomingKeywords' : sinonimos.idioma
	}, 
	'idiomas' : {}, 
	'livro' : {
		'upcomingKeywords' : sinonimos.livro, 
	}, 
	'sinopse' : {
		'currentKeywords' : [],
		'minSize' : 50
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
	'criacao' : {
		'upcomingKeywords' : sinonimos.criador 
	}, 
	'producao' : {
		'upcomingKeywords' : sinonimos.producao 
	}, 
	'roteiro' : {
		'upcomingKeywords' : sinonimos.roteiro 
	}, 
	'isSerie' : {
		'currentKeywords' : sinonimos.isSerie,
	}, 
	'status' : {}, 
	'numeroTemporadas' : {
		'upcomingKeywords' : sinonimos.numTemporadas
	}, 
	'numeroEpisodios' : {
		'upcomingKeywords' : sinonimos.numEpisodios
	}, 
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
		returnArray[keyword] += secondaryKeyword + ' : ' + value + ',';
	} else {
		//filmeProp['value'] += value + '|';
		returnArray[keyword] += value + ',';
	}
	
}

var artigoSin = [
	' a ',
	' e ',
	'mais'
]

var allKeywords = [];

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

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
	if (isKeyword(text) || isNumeric(text)) {
		return false;
	}
	return true;

}

function parse(title,textArray,idFilme,fonte){
	// console.log("Title"+title);
	var returnArray = [];
	returnArray['idFilme'] = idFilme;
	returnArray['fonte'] = fonte;

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
				} else if (filmeProps[key]['minSize'] && text.length > filmeProps[key]['minSize']) {
					addValue(returnArray,filmeProps[key],text,key);
				}
			});
		}
	}
	return returnArray;

}

var result = parse('Talk',program,7,'google');
console.log(result);