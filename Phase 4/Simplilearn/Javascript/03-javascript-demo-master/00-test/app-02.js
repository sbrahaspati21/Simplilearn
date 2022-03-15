//long running function

function waitthreeseconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {
    console.log('Finished function');
  }
}

function clickHandler() {
  console.log('click event');
}

document.addEventListener('click', clickHandler);
waitthreeseconds();
console.log('Finished execution');
