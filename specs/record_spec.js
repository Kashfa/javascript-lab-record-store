const assert = require('assert');
const Record = require( '../record.js');


describe('Record', function() {
  let record;

  beforeEach(function() {
    record = new Record('Queen', 'we will rock you', 'rock', 10);
  });

  it('it should have an artist', function() {
    const actual = record.artist;
    assert.strictEqual(actual, 'Queen');
  });

  it('it should have an artist', function() {
    const actual = record.title;
    assert.strictEqual(actual, 'we will rock you');
  });

  it('it should have an artist', function() {
    const actual = record.genre;
    assert.strictEqual(actual, 'rock');
  });

  it('it should have an artist', function() {
    const actual = record.price;
    assert.strictEqual(actual, 10);
  });
});
