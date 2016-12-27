function anClean(arr) {
	var obj = {};

	for (var i = 0; i < arr.length; i++) {
		var sorted = arr[i].toLowerCase().split('').sort().join('');

		obj[sorted] = arr[i];
	};
	var word = [];
    
	for(var key in obj){
		word.push(obj[key]);
	}
	var result = word.join(' ');

	return result;
};

var words = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

console.log( anClean(words) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'
