function mul() { 
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

function applyAll(func, arg1, arg2) {
   return func.apply(null, [].slice.call(arguments, 1));
}


console.log( applyAll(mul, 10, 10, 40) ); 