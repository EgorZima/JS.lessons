function getMaxNumber(arr) {
	return Math.max.apply(null,arr);
}

var someNumbers = [1,2,3,555,999];

console.log( getMaxNumber(someNumbers) );