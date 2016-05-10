var expect = require('chai').expect;

describe('stringCalc', function(){
    var stringCalc = require('../methods/calc_methods').stringCalc;

  it('should return a number for an empty string',function(){

    expect(stringCalc('')).to.be.a('number');
  });

  it('should return zero for an empty string',function(){

    expect(stringCalc('')).to.equal(0);
  });
});
