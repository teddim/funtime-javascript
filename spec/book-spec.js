var code = require('../books');

var books = [
  ["Learn to Program", "Chris Pine", 1934356360],
  ["Eloquent Javascript", "Marijn Haverbeke", 1593275846]
]

var empty = [];

describe('books', function(){
  it('transforms an array into an object', function(){
    expect(code.bookData(empty)).toEqual({});
  });
});

describe('books', function(){
  it('transforms an array into an object', function(){
    expect(code.bookData(books)).toEqual(
      {
        "1934356360": {
          "title": "Learn to Program",
          "author": "Chris Pine",
          "isbn10": 1934356360
        },
        "1593275846": {
          "title": "Eloquent Javascript",
          "author": "Marijn Haverbeke",
          "isbn10": 1593275846
        }
      }
    )
  });
});
