var code = require('../arrayToObject');

var dogs = [
  ["German Shepherd", "90 lbs.", "Work"],
  ["Pointer", "40 lbs.", "Hunting"],
  ["Corgi", "30 lbs.", "Awesomeness"]
];

var empty = [];

describe('arrayToObject', function(){
  it('transforms an array into an object', function(){
    expect(code.dogArray(empty)).toEqual({});
  });
});

describe('arrayToObject', function(){
  it('transforms an array into an object', function(){
    expect(code.dogArray(dogs)).toEqual(
      { 'German Shepherd': { size: '90 lbs.', 'bred for': 'Work' },
        Pointer: { size: '40 lbs.', 'bred for': 'Hunting' },
        Corgi: { size: '30 lbs.', 'bred for': 'Awesomeness' } });
      });
});
