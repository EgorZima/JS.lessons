Function.prototype.defer = function(ms) {
  setTimeout(this, ms)
}

function f() {
  console.log( "привет" );
}

f.defer(1000); 