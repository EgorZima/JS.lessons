function compareAge( personOne, personTwo ) {
    return personOne.age - personTwo.age
}
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort( compareAge );
 
console.log( people );
