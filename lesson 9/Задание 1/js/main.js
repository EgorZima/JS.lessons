// функция, сумирующая свои аргументы

function sum() {
  
  return [].reduce.call(arguments, function(a,b) {
    return a + b;
  });

}


console.log( sum(1,2,3,4,6,1) ) // 17
 
