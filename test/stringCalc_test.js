var expect = require('chai').expect;

describe('stringCalc', function(){
    var stringCalc = require('../methods/calc_methods').stringCalc;

  it('should return a number for an empty string',function(){

    expect(stringCalc('')).to.be.a('number');
  });

  it('should return zero for an empty string',function(){

    expect(stringCalc('')).to.equal(0);
  });

  it('should return the number 1 for the string "1"',function(){

    expect(stringCalc('1')).to.equal(1);
  });

  it('should return the number 9 for the string "9"',function(){

    expect(stringCalc('9')).to.equal(9);
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

  it('should return true',function(){
    expect(sum([1,2])).to.equal(3);
  });
});

describe('convertMultipleDigitStringToNumber',function(){
  var convertMultipleDigitStringToNumber = require('../methods/calc_methods').convertMultipleDigitStringToNumber;

  it('should convert the string 12 to the number 12',function(){
    expect(convertMultipleDigitStringToNumber('12')).to.equal(12);
    });
  });
