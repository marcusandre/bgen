var test = require('tape')
var add = require('../lib/index.js')

test('should add two numbers together', function (t) {
  t.plan(1)
  t.equal(add(5, 10), 15)
})
