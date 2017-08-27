

console.log('Hello parser');

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
				}
			});
		}
	}
  console.log("RETORNOARRAY$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
  console.log(returnArray);
	return returnArray;

}
module.export = "rocali";

// var result = parse('Hangover',hangover);
// console.log(result);
