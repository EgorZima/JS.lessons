function suffle(arr) {
	return Math.random() - 0.5;
};

var arr = [1,2,3,4,5,6,7,8];

var result = arr.sort(suffle);

console.log( result );