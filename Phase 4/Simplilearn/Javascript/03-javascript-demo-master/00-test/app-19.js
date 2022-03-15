//Prototypes
// prototype of an object is '__proto__' property
// functions have another property called 'prototype'

var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function () {
    return this.firstname + ' ' + this.lastname;
  },
};

var john = {
  firstname: 'David',
  lastname: 'Wilson',
};

console.log(person.getFullName());
// Never ever do this
john.__proto__ = person;
console.log(john.getFullName());

var jane = {
  firstname: 'jane',
};
jane.__proto__ = person;
console.log(jane.getFullName());

person.greet = function () {
  console.log(' Hello there ' + this.firstname + '  ' + this.lastname);
};
john.greet();
jane.greet();

var a = {};
var b = function () {};
var c = [];
