var obj = {
  person1Age: 20,
  person1Name: 'Ivanov',
  person2Age: 30,
  person2Name: 'Petrov',
  person3Age: 40,
  person3Name: 'Sidorov'
};

function extractAges(obj) {
  var ages = []; 
  
  for (key in obj) {
	if (typeof obj[key] === 'number' ) {
		ages.push( obj[key] );
	}
  }

  return ages;
}

function extractNames(obj) {
  var names = []; 
  
  for (key in obj) {
	if (typeof obj[key] === 'string' ) {
		names.push( obj[key] );
	}
  }

  return names
}

console.log(extractAges(obj))
console.log(extractNames(obj))