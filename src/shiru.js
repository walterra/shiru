var avocado = require('avocado-type-checker');

export default function(f) {
  var arguments_test;
  var return_test;

  var error = function(msg) {
    throw new Error(msg);
  };

  var shiru = function() {
    var f_return;

    if (typeof f === 'undefined') {
      return;
    }

    if (typeof arguments_test === 'undefined' && arguments.length > 0) {
      error('no function arguments expected.');
      return;
    }

    if (arguments.length !== arguments_test.length) {
      error('expected ' + arguments_test.length + ' arguments, ' + arguments.length + ' given.');
      return;
    }

    for (var i = 0; i < arguments.length; i++) {
      if (!avocado.isValid(arguments_test[i], arguments[i])) {
        error('function argument #' + (i + 1) + ' not valid.');
        return;
      }
    }

    f_return = f.apply(f, arguments);

    return f_return;
  };

  // exposes avocado type checker
  shiru.type = avocado;

  // arguments tester
  shiru.args = function() {
    arguments_test = arguments;
    return shiru;
  };

  shiru.return = function(tester) {
    return_test = tester;
    return shiru;
  };

  return shiru;
}
