var test = require('tape');
var s = require('../');

test('test shiru', function(t) {
  // testing a function with one argument as a integer
  var int = 1;
  var intReturn;

  var intFunction = s(function(myInt) {
    return myInt + '';
  })
  .args(s().type.int);

  t.doesNotThrow(function() {
    intReturn = intFunction(int);
  }, 'pass an integer.');

  t.equals(intReturn, '1', 'return value is the stringed integer.');

  t.throws(function() {
    // should only accept an integer
    intFunction('1');
  }, 'don\'t accept a string.');

  var f = s(function(myInt, myString) {
    return {
      myInt: myInt,
      myString: myString
    };
  })
  .args(s().type.int, s().type.string);

  t.doesNotThrow(function() {
    f(1, '1');
  }, 'passing correct integer and string to function.');

  t.throws(function() {
    f('1', 1);
  }, 'passing wrong arguments, should throw error.');

  t.end();
});
