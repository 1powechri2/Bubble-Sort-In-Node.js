const assert = require('chai').assert;
const bubbler = require('../bubbleSort')

describe('a bubble sort algorithm', function() {
  context('takes an array of values', function() {
    it('sorts them', function() {
      var arr = [4, 3, 5, 2, 1]
      assert.deepEqual(bubbler(arr), [1, 2, 3, 4, 5])
    })
  })
})
