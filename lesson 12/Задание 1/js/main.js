function delay(func, time) {
    
    return function() {
     var arg = arguments;
     var self = this;
      setTimeout( function () {
    	
    	func.apply(self,arg)
    
      }, time);
     }

} 

function f(x) {
   console.log(x)
}

var f1000 = delay(f, 1000);
var f3000 = delay(f, 3000);

f1000('one second');
f3000('thee seconds');

