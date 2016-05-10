var expect = require('chai').expect;

  describe('stringCalc', function(){
    var stringCalc = require('../methods/calc_methods').stringCalc;

  it('should return a number for an empty string',function(){

    expect(stringCalc([''])).to.be.a('number');
  });

  it('should return zero for an empty string',function(){

    expect(stringCalc([''])).to.equal(0);
  });

  it('should return the number 1 for the string "1"',function(){

    expect(stringCalc(['1'])).to.equal(1);
  });

  it('should return the number 0 for the string "0"',function(){

    expect(stringCalc(['0'])).to.equal(0);
  });

  it('should return the number 9 for the string "9"',function(){

    expect(stringCalc(['9'])).to.equal(9);
  });

  it('should return number 54 for input string 54',function(){
    expect(stringCalc(['54'])).to.equal(54);
  });

  it('should return number 00 for input string 00',function(){
    expect(stringCalc(['00'])).to.equal(0);
  });

  it('should return 32 for the input strings 15 and 17',function(){
    expect(stringCalc(['15','17'])).to.equal(32);
  });

  it('should return the number 132 for the input: ["132"]',function(){
    expect(stringCalc(['132'])).to.equal(132);
  });

  it('should return the number 1459 for the input: ["500","659","300"]',function(){
    expect(stringCalc(['500','659','300'])).to.equal(1459);
  });

});

describe('getNumberDigitTensPlace',function(){
  var getNumberDigitTensPlace = require('../methods/calc_methods').getNumberDigitTensPlace;

  it('should return the number 10 for string input 1',function(){
    expect(getNumberDigitTensPlace(1)).to.equal(10);
  });

  it('should return the number 0 for the string input 0',function(){
    expect(getNumberDigitTensPlace(0)).to.equal(0);
  });
});

describe('getNumberDigitOnesPlace',function(){
  var getNumberDigitOnesPlace = require('../methods/calc_methods').getNumberDigitOnesPlace;

  it('should return the number 1 for input string 1',function(){
    expect(getNumberDigitOnesPlace('1')).to.equal(1);
  });
  it('should return the number 0 for input empty string',function(){
    expect(getNumberDigitOnesPlace('')).to.equal(0);
  });
});

describe('sum',function(){
  var sum = require('../methods/calc_methods').sum;

  it('should return 3 for the input array [1,2]',function(){
    expect(sum([1,2])).to.equal(3);
  });

  it('should return 45 for the input array [1,2,20,12]',function(){
    expect(sum([1,2,30,12])).to.equal(45);
  });
});

describe('convertMultipleDigitStringToNumber',function(){
  var convertMultipleDigitStringToNumber = require('../methods/calc_methods').convertMultipleDigitStringToNumber;

  it('should convert the string 12 to the number 12',function(){
    expect(convertMultipleDigitStringToNumber('12')).to.equal(12);
    });
  });

describe('getNumberDigitHundredsPlace',function(){
  var getNumberDigitHundredsPlace = require('../methods/calc_methods').getNumberDigitHundredsPlace;

  it('should return 100 for the input 1',function(){
    expect(getNumberDigitHundredsPlace('1')).to.equal(100);
  });

  it('should return 0 for the input 0',function(){
    expect(getNumberDigitHundredsPlace('0')).to.equal(0);
  });
});
