var image = {
    width: 100,
    height: 200,
    title: 'Cool image'
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function multuplyNumeric(obj) {
	for (var key in obj) {
	  if(isNumeric(obj[key])) {
		  obj[key] *= 2;
	  }
    }      
}

multuplyNumeric(image);
console.log(image);


