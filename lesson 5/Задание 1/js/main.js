var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 113,
  'Anton': 99
};


var max = 0;
var maxName = '';

for (var key in tasksCompleted) {
	if(max < tasksCompleted[key]){
		max = tasksCompleted[key];
		maxName = key;
}
}

console.log(max);
console.log(maxName);

