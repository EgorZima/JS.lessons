function printNumbersInterval() {
	var i = 0;
	var timer = setInterval(function() {
		console.log(i);
		if (i == 20) {
		  clearInterval(timer)
		}
		i++
	}, 100);
}

printNumbersInterval()