function toUpper(str) {
	var words = str.split(' ');
	var upped = [];

	for (var i = 0; i < words.length; i++) {
		upped.push( words[i].charAt(0).toUpperCase() + words[i].slice(1) );
	}
	var result = upped.join(' ')
	return result;
}

console.log( toUpper('hi, how are you?') );