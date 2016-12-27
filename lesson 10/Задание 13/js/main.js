function add() {
	if (arguments.length === 0) {
		return 0;
	}

    var arg = arguments;
    var sum = 0;

	for (var i = 0; i < arg.length; i++) {
       sum += arg[i] * (i + 1);
	};

	return sum;
}


console.log( add(1,4,-5,5) );