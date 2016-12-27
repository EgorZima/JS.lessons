function checkLength(str, maxLength) {
	if(str.length > maxLength){
		return str.slice(0, maxLength - 3) + '...';
	} else{
		return str
	}
};

console.log(checkLength('Hi! My name is Egor I am sixteen years old', 20));
console.log(checkLength('Hi! How are you', 20));