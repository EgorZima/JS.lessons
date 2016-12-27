function User(fullName) {
  this.fullName = fullName;

  this.firstName = function() {
  	var splited = this.fullName.split(' ');
    var first = splited[0];
    
    return first;
  };

  this.lastName = function() {
  	var splited = this.fullName.split(' ');
    var last = splited[1];
   
    return last;
  };

}

var vasya = new User("Василий Попкин");

console.log( vasya.firstName() );
console.log( vasya.lastName() );
