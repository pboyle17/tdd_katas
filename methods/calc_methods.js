function stringCalc (string){
  var numberizedDigit = getNumberDigitOnesPlace(string);


  return numberizedDigit;
}

function getNumberDigitTensPlace(string){
  var number;
  if(string == ''){
    number = 0;
  }
  if(string == '1'){
    number = 10;
  }
  if(string == '2'){
    number = 20;
  }
  if(string == '3'){
    number = 30;
  }
  if(string == '4'){
    number = 40;
  }
  if(string == '5'){
    number = 50;
  }
  if(string == '6'){
    number = 60;
  }
  if(string == '7'){
    number = 70;
  }
  if(string == '8'){
    number = 80;
  }if(string == '9'){
    number = 90;
  }
  return number;
}

function getNumberDigitOnesPlace (string){
  var number;
  if(string == ''){
    number = 0;
  }
  if(string == '1'){
    number = 1;
  }
  if(string == '2'){
    number = 2;
  }
  if(string == '3'){
    number = 3;
  }
  if(string == '4'){
    number = 4;
  }
  if(string == '5'){
    number = 5;
  }
  if(string == '6'){
    number = 6;
  }
  if(string == '7'){
    number = 7;
  }
  if(string == '8'){
    number = 8;
  }if(string == '9'){
    number = 9;
  }
  return number;
}

function sum(arr){
  var sum=0;

  arr.forEach(function(number){
    sum+=number
  })

  return sum;
}

function convertMultipleDigitStringToNumber (string){
  var digits = string.split('');
  var count = digits.length;
  var number = digits.map(function(digit){
    if(count == 2){
      count--;
      return getNumberDigitTensPlace(digit);
    }
    if(count == 1){
      count--;
      return getNumberDigitOnesPlace(digit)
    }

  });

  var converted = sum(number);

  return converted;
}

module.exports.sum = sum;
module.exports.stringCalc = stringCalc;
module.exports.getNumberDigitOnesPlace = getNumberDigitOnesPlace;
module.exports.convertMultipleDigitStringToNumber = convertMultipleDigitStringToNumber;
module.exports.getNumberDigitTensPlace = getNumberDigitTensPlace;
