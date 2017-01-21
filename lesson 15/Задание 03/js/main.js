Function.prototype.defer = function(ms) {
  var f = this;

  return function() {
    var args = arguments,
    self = this;

    setTimeout(function() {
       f.apply(self,args)
    }, ms);
  }
}

function f(a, b) {
  console.log( a + b );
}

f.defer(1000)(1, 2);