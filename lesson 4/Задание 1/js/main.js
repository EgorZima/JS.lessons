function fib(n) {
	var a = 1,
	    b = 1;

	for(var i =3; i <= n; i++){
		var с = a + b;
		a = b;
		b = с;
	}
	return b
}
console.log(fib(13))