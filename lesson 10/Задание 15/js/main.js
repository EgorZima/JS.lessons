var Calculator = {
 average: function () {
   var arg = [].slice.call(arguments);
   
   if (arg.length === 0) {
   	return 0
   }
   var sum = arg.reduce(function(a,b) {
   	return a + b
   })
   var result = sum/arg.length;

   return result;
 }
};


console.log(Calculator.average(3,4,5,7,10,11,3,4,4,2,2))