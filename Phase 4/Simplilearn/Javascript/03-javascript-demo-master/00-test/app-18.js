// functional programming
var arr1 = [1, 2, 3];
// console.log(arr1);

var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
// console.log(arr2);

// functional programming

function mapForEach(arr, fn) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  console.log(newArr);
}

var arrX = [1, 2, 3];
mapForEach(arrX, function (item) {
  return item * 3;
});

mapForEach(arrX, function (item) {
  return item * 5;
});

mapForEach(arrX, (item) => item * 7);
mapForEach(arrX, (item) => item > 2);
