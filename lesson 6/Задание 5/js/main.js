function isPal(string) {
	var strLower = string.toLowerCase();//приводим в нижний регистр
	
	var strReverse = strLower.split('').reverse().join('');	// разбивает скроку посимвольно и применяем метод reverse(), после склеиваем
	
	if ( strReverse === string.toLowerCase()) {
		return true;
	} else {
		return false;
	}
};

console.log(isPal('Anna')); // true
console.log(isPal('привет тевирп')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
