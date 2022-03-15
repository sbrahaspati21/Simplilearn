function a() {
  var myvar = 2;
  console.log(myvar);
  function b() {
    console.log(myvar);
  }
  b();
}

var myvar = 1;
console.log(myvar);
a();
