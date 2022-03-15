// Existence checks
var a;
a = 0;

if (a || a === 0) {
  console.log('something is there');
} else {
  console.log('something is not there');
}

function welcome(name) {
  console.log('Welcome ' + name);
}
var name = 'y';
welcome('RK');
welcome();
