// creating objects using function constructor
function Person(firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  // this.greet = function () {
  //   console.log('Hello ' + this.firstname + ' ' + this.lastname);
  // };
  console.log('this function is invoke');
}

// Function Constructor
// in the statement below, the 'new' keyword
// creates an empty object and passes it as
// 'this' variable to the function (Person)
//
// when using the function constructor the
// object's __proto__ property will point to
// the function's prototype property
var john = new Person('dexter', 'wilson');
console.log(john);

var jane = new Person('jane', 'doe');
console.log(jane);

Person.prototype.greet = function () {
  console.log('Hello ' + this.firstname + ' ' + this.lastname);
};

john.greet();
jane.greet();
