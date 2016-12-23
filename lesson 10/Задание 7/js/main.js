function suffle(arr) {
	for (var i = 0; i < arr.length; i++) {
		var randomIndex = Math.floor(Math.random() * (i));
		var someIndex = arr[randomIndex];

		arr[randomIndex] = arr[i];
		arr[i] = arr[randomIndex];
	} 

	return arr
}


console.log( suffle([1,2,3,4,5,6,7]) )