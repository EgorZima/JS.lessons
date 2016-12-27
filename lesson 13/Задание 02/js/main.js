function User() {
  var  firstName,
       surname;

  this.setFirstName = function(name) {
    firstName = name;
  };

  this.setSurname = function(sur) {
    surname = sur;
  };

  this.getFullName = function() {
    return firstName + ' ' + surname;
  };
}

var user = new User();
user.setFirstName('Петя');
user.setSurname("Иванов");

console.log( user.getFullName() ); // Петя Иванов