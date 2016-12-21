function filterRangeInPlace(arr, a, b) {
    
    for (var i = 0; i < arr.length; i++)  {
    	if(arr[i] < 1 || arr[i] > 4) {
    		arr.splice(i--, 1);
    	}
    }
};


arr = [5, 3, 8, 1, 6, 5, 3, 3];

filterRangeInPlace(arr, 1, 4);

console.log(arr);