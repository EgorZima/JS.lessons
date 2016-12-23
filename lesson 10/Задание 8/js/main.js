var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];

function findUnique(arr) {
   var newArr = []; 
   
   for(var i = 0; i < arr.length; i++) {
	  if(newArr.indexOf(arr[i]) === -1) {
		newArr.push(arr[i])
	  }
    }

    return newArr;
}


console.log(findUnique(arr))