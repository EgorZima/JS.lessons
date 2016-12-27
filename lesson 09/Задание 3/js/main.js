function work(a, b) {
  console.log( a + b ); 
}

function makeLogging(f, log) { 
  
   function wrap() {
  	log.push([].slice.call(arguments));

  	return f.apply(this, arguments);
  }

  return wrap
}




var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

console.log(log)