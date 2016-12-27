// Превратите объект в JSON формат и обратно
var leader = {
	name: 'Вася Васинович',
	age: 21
}

var jsonFormat = JSON.stringify(leader);
console.log(jsonFormat);

var jsFormat = JSON.parse(jsonFormat);
console.log(jsFormat)