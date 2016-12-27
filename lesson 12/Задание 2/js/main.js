function f(x) { 
   console.log(x);
}

function debounce(funct, time) {
     var state = true;

     return function() {
     	if (state === false) {
           return
        }; 

        funct.apply(this, arguments);
        state = false;

        setTimeout(function() {
            state = true;
        }, time)
     }
}

var f = debounce(f, 1000);

f('textOne'); 
f('textTwo'); 

setTimeout( function() { f('textThree') }, 500); 
setTimeout( function() { f('textFour') }, 2100); 
setTimeout( function() { f('textFive') }, 1800); 