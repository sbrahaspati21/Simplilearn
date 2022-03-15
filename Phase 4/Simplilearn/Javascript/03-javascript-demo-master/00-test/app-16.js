// callbacks
function callmelater(callbackfunction) {
  var a = 1000; // some work
  var b = 2000; // some work
  // console.log(c);
  // callbackfunction();
}

callmelater(function () {
  console.log('I am done ! ');
});

function fullName(firstName, lastName, callback) {
  console.log('My name is ' + firstName + ' ' + lastName); // some work that takes very long to complete
  callback(lastName);
}

var greeting = function (ln) {
  console.log('Welcome ' + ln);
};

fullName('Alex', 'Wilson', greeting);
console.log('\n');
fullName('Dexter', 'Johnson', greeting);

//IIFE and Closure
const empId = (function () {
  let count = 0;
  return function () {
    ++count;
    return `emp${count}`;
  };
})();

console.log('New Emplyee IDs are listed here');
console.log('Alex: ' + empId());
console.log('Dexter: ' + empId());
console.log('Annie: ' + empId());

// the inner function is a closure, that runs
// after 3 seconds.
function greetMeLater() {
  var greetingMessage = 'Hello there ';
  setTimeout(function () {
    console.log(greetingMessage);
  }, 3000);
}
greetMeLater();
