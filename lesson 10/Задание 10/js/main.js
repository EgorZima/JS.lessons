function swap(str){
     return str.split('').map(findRegister).join('');
}

function findRegister(word) {
      return word === word.toLowerCase() ? word.toUpperCase() : word.toLowerCase();
}

console.log( swap('CodeWars') );