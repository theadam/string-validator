var str = require('../');
var should = require('chai').should();
var expect = require('chai').expect;

describe('string-validator', function(){

  it('should be able to use contains', function(){
    var validator = str.contains('test');

    validator('test1').should.be.true;
    validator('asdasd').should.be.false;
  });

  it('should be able to use multiple matches forms', function(){
    var m1 = str.matches('foo');
    var m2 = str.matches('foo', 'i');
    var m3 = str.matches(/foo/i);

    m1('afooa').should.be.true;
    m1('aFOOa').should.be.false;
    m1('bad').should.be.false;

    m2('afooa').should.be.true;
    m2('aFOOa').should.be.true;
    m2('bad').should.be.false;

    m3('afooa').should.be.true;
    m3('aFOOa').should.be.true;
    m3('bad').should.be.false;
  });



});
