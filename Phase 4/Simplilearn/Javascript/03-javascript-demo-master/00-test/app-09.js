// console.log(this);

// function x() {
//   console.log(this);
// }
// x();

var b = function () {
  console.log(this);
};
b();

var c = {
  name: "the c object";
  log: function() {
    var self = this;
    self.name = 'updated ';
    console.log(self);
    
  }
}