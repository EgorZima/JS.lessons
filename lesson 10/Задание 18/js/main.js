function count(string) {  
   var count = {};

   string.split('').forEach(function(n){
   	count[n] ? count[n]++ : count[n] = 1;
   });

   return count;
}

console.log( count('aabbcc'))
console.log( count('abcbbacbac'))