var arrname = [];


function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    matches = [];

    substrRegex = new RegExp(q, 'i');

    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

function readJson(){
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
    //usage:
    readTextFile("/names.json", function(text){
        var obj = JSON.parse(text)
        for(i in obj)
          arrname.push(obj[i]['nome']);
        JustDoIt();

    });
}

function JustDoIt() {
  $('#fIlmeName').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: "arrname",
    source: substringMatcher(arrname.filter(onlyUnique))
  });

}

$(function(){
  readJson();
})
