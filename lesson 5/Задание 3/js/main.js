var numbers = [];

for (var i = 0; i < 2; i++){
	var num = +prompt('Введите число ', 0);
    numbers.push(num);
};

var sum = 0;

for (var i = 0; i < numbers.length ; i++) {
 	sum += numbers[i];
};

console.log(sum)