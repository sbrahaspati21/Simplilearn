var arr = new Array();
var arr = [];
var arr = [1, 2, 3];
var arr = [
  1,
  false,
  {
    name: 'tony',
    address: 'xyz street',
  },
  function (name) {
    var greeting = 'hello';
    console.log(greeting + ' ' + name);
  },
  'hello',
];

console.log(arr);
arr[3](arr[2].name);
