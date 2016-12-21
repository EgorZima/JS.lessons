var user = {
  className: 'open menu'
};


function addClass(obj, cls) {
	var classes = obj.className ? obj.className.split(' ') : [];
   
	for (var i = 0; i < classes.length; i++) {
		if (classes[i] == cls) {
			return;
		}
	}

	classes.push(cls);

	user.className = classes.join(' ');

	console.log(user.className);

}


addClass(user,'item');
addClass(user,'open');
addClass(user,'hi');
addClass(user,'menu');