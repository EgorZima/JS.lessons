function reverseIt(data){
   if (typeof data === 'string') {
    return data.split('').reverse().join('');
   }
   else if(typeof data === 'number') {
    return +(data.toString().split('').reverse().join(''));
   }
   return data
 }


console.log( reverseIt('Hello') );
console.log( reverseIt(314159) )