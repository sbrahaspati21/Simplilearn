// Function statement
function welcome() {
  console.log('Welcome ');
}

//welcome();

//Functions are objects

// console.log(welcome);
welcome.language = 'English';
// console.log(welcome.language);

// welcome();

var anonymousWelcome = function () {
  console.log('Welcome-2');
};
// anonymousWelcome();

function log(a) {
  console.log(a);
}
var b = 3;
log(b);
log(3);
log('hello');
log({ greeting: 'hello' });
log(function () {
  console.log('hi');
});
log(() => {
  console.log('something');
});

function newlog(b) {
  b();
}
newlog(() => {
  console.log('newlog');
});
