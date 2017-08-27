

console.log('Hello parser');

var sinonimos = {
	original : [
		'Título',
	],
	sinopse : [
		'Sinopse',
		'Resumo',
		'detalhe'
	],
	lancamento : [
		'Ano de',
		'Lancamento',
		'Lançamento',
		'Ano'
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
		'Gênero',
		'Tipo de'
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
		'Distribuidor',
		'Distribuição',
		'Emissora',
		'Local',
		'Emissora',
		'Período',
		'Gravador',
		'relacionada',
		'relacionado',
		'Classificação',
		'Bilheterias'
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
	'nomeOriginal' :{
		'upcomingKeywords' : sinonimos.original
	},  
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
		'currentKeywords' : sinonimos.sinopse,
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

 exports.parse = function(title,textArray,idFilme,fonte){
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
		return !text.includes('&#x') && text.length > 0;
	});

	console.log(textArray);
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
	console.log(returnArray);
	return returnArray;

}

module.export = "rocali";

// var result = parse('Hangover',hangover);
// console.log(result);
