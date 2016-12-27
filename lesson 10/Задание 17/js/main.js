function solution(number){
  var arr = number.toString().split('');
  var sum = 0;
  
  for (var i = 0; i < arr.length; i++) {
     if( (arr[i] % 3 === 0) || (arr[i] % 5 === 0) ) {
        sum += +arr[i];
     }
  }
  return sum
} 

console.log( solution(12348583) );