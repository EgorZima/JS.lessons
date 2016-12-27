function duplicates(arr) {
  var newArr = [];
  var current = arr;
  for (var i = 0; i < arr.length; i++) {
  	if(arr[i] === 1) {
  		newArr.push(arr[i])
  	}
  }

  return newArr;
}


console.log(duplicates([1,2,3,4,1,1]))