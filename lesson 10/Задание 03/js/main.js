function makeAlphavit(str) {
	return  str.split('').sort().join('');
}

console.log( makeAlphavit('webmaster'));
console.log( makeAlphavit('1286340759'));