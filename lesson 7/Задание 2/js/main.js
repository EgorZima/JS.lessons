function camelize(str) {
     var splited = str.split('-');

     for(var i = 1; i < splited.length; i++) {
     	splited[i] = splited[i].charAt(0).toUpperCase() + splited[i].slice(1);
        
     }
     var result = splited.join('');
    
     console.log(result);
}

camelize('background-color');
camelize("background-color");
camelize("list-style-image"); 
