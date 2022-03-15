// call, bind, apply
// will set your 'this' variable
// bind - you can set what will be the 'this' variable.
//        will make a copy of your function, it won't invoke it.
// call - you can set what will be the 'this' variable
//        It will invoke your fuction
// apply - same as call. But the arguments must be passed as an array

var person = {
  firstName: 'Dexter',
  lastname: 'Wilson',
  getFullName: function () {
    var fullName = this.firstName + ' ' + this.lastname;
    return fullName;
  },
};

// console.log(person.firstName);
// console.log(person.lastname);
// console.log(person.getFullName());

// console.log(this);
// console.log(this.firstName);

var logName = function (var1, var2) {
  console.log(var1, var2);
  console.log('logged: ' + this.getFullName());
};

// logName();

var logNameBinded = logName.bind(person);
// logNameBinded();

// logName.call(person, 3, 4);

// logName.apply(person, [3, 4]);

//function borrowing
var person2 = {
  firstName: 'David',
  lastname: 'Johnson',
};
// console.log(person.getFullName.call(person2));

//function currying - bind
function multiply(a, b) {
  console.log(a * b);
}
// multiply(2, 3);

var multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(4);

var multiplyByEight = multiply.bind(this, 8);
multiplyByEight(4);
