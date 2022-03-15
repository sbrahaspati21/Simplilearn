// // closures
// function greet(greetmessage) {
//   return function (name) {
//     console.log(greetmessage + ' ' + name);
//   };
// }

// var customisedGreeting = greet('hello there');
// customisedGreeting('John');

function greet1() {
  var greetMessage = 'x';
  return function () {
    console.log(greetMessage);
  };
}
var y = greet1();

y();
