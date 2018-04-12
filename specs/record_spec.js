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
});
