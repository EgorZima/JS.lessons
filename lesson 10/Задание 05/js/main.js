// find the longest word in string

function findLongest(str) {
	var arr = str.split(' ');
    var length = 0;
    var word;

    for (var i = 0; i < arr.length; i++) {
    	if(arr[i].length > length) {
            length = arr[i].length;
    		word = arr[i];
    	}
    }
    return word
};

var string = 'I am the longest word';
console.log( findLongest(string) ); // longest