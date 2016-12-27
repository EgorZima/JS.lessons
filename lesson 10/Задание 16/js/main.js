function isPangram(string){
  var str = string.toUpperCase();

  var alphavet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for(var i = 0; i < alphavet.length; i++) {
     if (str.indexOf(alphavet.charAt(i)) === -1) {
            return false;
      }
    return true;
  } 
}


var str = 'The quick brown fox jumps over the lazy dog';
var strTwo = 'The quick brown fox';

console.log( isPangram(str) );
console.log( isPangram(strTwo) );