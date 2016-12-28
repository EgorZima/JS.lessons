Function.prototype.defer = function(ms) {
  var f = this;
  var args = arguments,
    self = this;
  return function() {
    

    setTimeout(function() {
       f.apply(self,args)
    }, ms);
  }
}

function f(a, b) {
  console.log( a + b );
}

f.defer(1000)(1, 2);