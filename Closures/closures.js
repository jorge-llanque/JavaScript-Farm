function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }
  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();

const anotherFunction = outer();
anotherFunction();
anotherFunction();

// Example: A factory for incrementors
function createInc(startVaue) {
  let index = -1;

  return (step) => {
    startVaue += step;
    index++;
    return [index, startVaue];
  };
}

const inc = createInc(5);
console.log(inc(2)); // => [0, 7]
console.log(inc(44)); // => [1, 51]
