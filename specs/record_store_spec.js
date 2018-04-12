const assert = require('assert');
const Record_Store = require('../record_store.js');
const Record = require('../record.js');

describe('Record_Store', function() {
  let record_store1;
  let record1;
  let record2;
  let record3;
  let inventory;

  beforeEach(function() {
    record_store1 = new Record_Store('Grooves', 'Edinburgh', inventory);

    inventory = [record1, record2, record3];

    record1 = new Record('Ellie Goulding', 'Lights', 'Electronic/Pop', 15 );
    record2 = new Record('Ellie Goulding', 'Halcyon', 'Electronic/Pop', 17 );
    record3 = new Record('Ellie Goulding', 'Delerium', 'Electronic/Pop', 10 );
  });

  it('it should have a name', function() {
    const actual = record_store1.name;
    assert.strictEqual(actual, 'Grooves');
  });

  it('it should have a city', function() {
    const actual = record_store1.city;
    assert.strictEqual(actual, 'Edinburgh');
  });

  it('it should have an inventory', function() {
    const actual = record_store1.inventory;
    assert.deepStrictEqual(actual, inventory);
  });

});
