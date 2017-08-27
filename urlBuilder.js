var Crawler = require('crawler');
const $ = require('cheerio');

class Filme {
    constructor(nomeFonte, url, seletor) {
        this.nomeFonte = nomeFonte;
        this.url = url;
        this.seletor = seletor;
    }

    updateInDatabase() {
        // Rocali update method
    }

    createInDatabase() {
        // Rocali create method
    }
}

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
                var filme = new Filme(adorocinema.name, null, adorocinema.selector);
                // filme.createInDatabase();
            } else {
                var content = res.$;
                var movieUrl = $(wikipedia.searchSelector, content.html())[0].attribs.href;
                var filme = new Filme(wikipedia.name, wikipedia.baseUrl + movieUrl, wikipedia.selector);
                // filme.createInDatabase();
                console.log(filme);
            }
        } catch (err) {
            console.log(err);
            var filme = new Filme(adorocinema.name, null, adorocinema.selector);
            // filme.createInDatabase();
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
                // filme.createInDatabase();
            } else {
                var content = res.$;
                var movieUrl = $(adorocinema.searchSelector, content.html())[0].attribs.href;
                var filme = new Filme(adorocinema.name, adorocinema.baseUrl + movieUrl, adorocinema.selector);
                // filme.createInDatabase();
                console.log(filme);
            }
        } catch (err) {
            console.log(err);
            var filme = new Filme(adorocinema.name, null, adorocinema.selector);
            // filme.createInDatabase();
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

function urlBuilder(id, titleName) {
    if ((typeof id === 'number' && id) &&
        (typeof titleName === 'string' && titleName)) {
        // filme.updateInDatabase();

        var filme = new Filme(google.name, getUrl(titleName, google), google.selector);
        // filme.createInDatabase();
        console.log(filme);

        wikipedia.searchCrawler.queue(getUrl(titleName, wikipedia));
        adorocinema.searchCrawler.queue(getUrl(titleName, adorocinema));
    }
}

urlBuilder(1, "Bee Movie");