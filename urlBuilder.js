var Crawler = require('crawler');
const $ = require('cheerio');

var db = require('./DBManager.js');

class Filme {
    constructor(nomeFonte, url, seletor) {
        this.nomeFonte = nomeFonte;
        this.url = url;
        this.seletor = seletor;
    }

    updateInDatabase(id, status) {
        db.updateFilmeLog(id, status);
        // Rocali update method
    }

    createInDatabase(nome, url, fonte) {
        db.createFilmeLog(nome, url, fonte);
        // Rocali create method
    }
}

var mapFilmes = new Map();

var google = {
    name: 'google',
    baseUrl: 'https://www.google.com.br/search?q=#titleName',
    selector: '#rhs_block',
    replaceTag: '#titleName',
    mustSearchUrl: false
};

var wikipedia = {
    name: 'wikipedia',
    baseUrl: 'https://pt.wikipedia.org',
    selector: '.infobox_v2',
    searchBaseUrl: 'https://pt.wikipedia.org/w/index.php?search="#titleName" AND "filme"',
    searchSelector: '.mw-search-result-heading a[href]',
    replaceTag: '#titleName',
    mustSearchUrl: true
};

var adorocinema = {
    name: 'adorocinema',
    baseUrl: 'http://www.adorocinema.com',
    selector: '',
    searchBaseUrl: 'http://www.adorocinema.com/busca/1/?q=#titleName',
    searchSelector: 'tbody a[href]',
    replaceTag: '#titleName',
    mustSearchUrl: true
};

var wikipediaSearchCrawler = new Crawler({
    maxConnections: 10,
    callback: function (error, res, done) {
        try {
            if (error) {
                console.log(error);
                var filme = new Filme(wikipedia.name, null, wikipedia.selector);
                var obj = mapFilmes.get(res.options.url) || null;
                filme.createInDatabase(obj.titleName, null, wikipedia.name);
            } else {
                var content = res.$;
                var movieUrl = $(wikipedia.searchSelector, content.html())[0].attribs.href;
                var filme = new Filme(wikipedia.name, wikipedia.baseUrl + movieUrl, wikipedia.selector);
                console.log(res.options.url);
                var obj = mapFilmes.get(res.options.url) || null;
                console.log(obj.titleName);
                filme.createInDatabase(obj.titleName, filme.url, wikipedia.name);
                console.log(filme);
            }
        } catch (err) {
            console.log(err);
            var filme = new Filme(wikipedia.name, null, wikipedia.selector);
            var obj = mapFilmes.get(res.options.url) || null;
            filme.createInDatabase(obj.titleName, null, wikipedia.name);
        }
        done();
    }
});

var adorocinemaSearchCrawler = new Crawler({
    maxConnections: 10,
    callback: function (error, res, done) {
        try {
            if (error) {
                console.log(error);
                var filme = new Filme(adorocinema.name, null, adorocinema.selector);
                var obj = mapFilmes.get(res.options.url) || null;
                filme.createInDatabase(obj.titleName, null, adorocinema.name);
            } else {
                var content = res.$;
                var movieUrl = $(adorocinema.searchSelector, content.html())[0].attribs.href;
                var filme = new Filme(adorocinema.name, adorocinema.baseUrl + movieUrl, adorocinema.selector);
                console.log(res.options.url);
                var obj = mapFilmes.get(res.options.url) || null;
                console.log(obj.titleName);
                if (movieUrl.includes('239630')){
                filme.createInDatabase(obj.titleName, null, adorocinema.name);
                } else {
                  filme.createInDatabase(obj.titleName, filme.url, adorocinema.name);  
                }
                
                console.log(filme);
            }
        } catch (err) {
            console.log(err);
            var filme = new Filme(adorocinema.name, null, adorocinema.selector);
            var obj = mapFilmes.get(res.options.url) || null;
            filme.createInDatabase(obj.titleName, null, adorocinema.name);
        }
        done();
    }
});

wikipedia.searchCrawler = wikipediaSearchCrawler;
adorocinema.searchCrawler = adorocinemaSearchCrawler;

function getUrl(titleName, source) {
    var url;
    if (source.mustSearchUrl) {
        url = source.searchBaseUrl;
        return url.replace(source.replaceTag, titleName);
    } else {
        url = source.baseUrl;
        return url.replace(source.replaceTag, titleName);
    }
}

exports.urlBuilder = function (id, titleName) {
    if ((typeof id === 'number' && id) &&
        (typeof titleName === 'string' && titleName)) {
        var obj = {
            id: id,
            titleName: titleName
        };

        var urlGoogle = getUrl(titleName, google);
        var filme = new Filme(google.name, urlGoogle, google.selector);
        filme.updateInDatabase(id, '1');
        // filme.createInDatabase(titleName, urlGoogle, google.name);
        // console.log(filme);

        // var searchUrlWikipedia = getUrl(titleName, wikipedia);
        // wikipedia.searchCrawler.queue({url:searchUrlWikipedia});
        // mapFilmes.set(searchUrlWikipedia, obj);

        var searchUrlAdorocinema = getUrl(titleName, adorocinema);
        adorocinema.searchCrawler.queue({url:searchUrlAdorocinema});
        mapFilmes.set(searchUrlAdorocinema, obj);
    }
}

// urlBuilder(1, "Bee Movie");

// export.module = 'ramires';