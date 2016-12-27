function takeDescending(str) {
	var result = str.split('').sort().reverse().join('');

	return result
}

console.log( takeDescending('123456789') );
console.log( takeDescending('2869175829') );
