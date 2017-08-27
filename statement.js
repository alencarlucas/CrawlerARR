exports.insert = function (obj) {
  var columnName = '', values = '';
  for(var key in obj){
    columnName += key + ',';
    values += "'" + obj[key] + "',";
  };
  columnName = columnName.substring(0, columnName.length-1);
  values = values.substring(0, values.length-1);
  console.log("-----------------------------------------------");
  console.log("INSERT INTO FilmeInst (" + columnName + ") VALUES ( " + values + " );");
  return "INSERT INTO FilmeInst (" + columnName + ") VALUES ( " + values + " );"
};
