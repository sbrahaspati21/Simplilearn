// IIFEs
// Immediately Invoked Fuction Expressions

// function statement
function greet(name) {
  console.log('Hello ' + name);
}
greet('john');

// function expression
var greetFunction = function (name) {
  console.log('Hello ' + name);
};
greetFunction('john');

//IIFEs
var greeting = (function (name) {
  return 'Hello ' + name;
})('john');
console.log(greeting);

//IIFE
var firstname = 'John';
(function (name) {
  var greeting = 'inside iife: hello';
  console.log(greeting + ' ' + name);
})(firstname);
