var obj = {
  className: 'open menu'
};

function removeClass(obj, cls) {
    var classes = obj.className.split(' '); 

    for (var i = 0; i < classes.length; i++) {
    	if(classes[i] === cls){
    		classes.splice(i, 1);
    	}
    }
    obj.className = classes.join(' ');
}
removeClass(obj, 'open'); 
console.log(obj);