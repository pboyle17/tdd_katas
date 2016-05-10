function stringCalc (string){
  var numberizedDigit = getNumberDigit(string);

  return numberizedDigit;
}

function getNumberDigit (string){
  var number;
  if(string == ''){
    number = 0;
  }
  return number;
}

module.exports.stringCalc = stringCalc;
module.exports.getNumberDigit = getNumberDigit;
