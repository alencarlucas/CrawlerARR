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
          console.log(res.body);
        }
        done();
    }
});

// Queue just one URL, with default callback
c.queue(['https://www.facebook.com/SKYBrasil/', 'https://www.instagram.com/skybrasil/']);

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
