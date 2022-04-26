// Local Scope
var func = function () {
  var local = true;
};
console.log(local); // !!ReferenceError: local is not defined

// Parent/Child Scope
var g = "global";
function blender(fruit) {
  var b = fruit;
  var y = "yogurt";
  function bs() {
    var x = "asdf";
    console.log(b + "and" + y + "makes" + b + "swirl");
  }
  bs();
}
blender("blueberry");

// Privacy
var g = "global";
function go() {
  var l = "local";
  var g = "in here";
  console.log(g + " inside go");
}
go();
console.log(g + "outside go");

// Block Scope
function mrFunction(whatever) {
  // this whole damm thing is a block
  for (loop; ; ) {
    // this is also a block
    if (condition) {
      // this is a block.
    } else {
      // another block
    }
    return {
      // not a block. This is an object
    };
  }
}

// A function has access to its own local scope variables
var fn = function () {
  var name = "inner";
  ACTUAL = name;
};
fn();
expect(ACTUAL === "inner").to.be.true;

// Inputs to a function are treated as local scope variables
var fn = function (name) {
  ACTUAL = name;
};
fn("inner");
expect(ACTUAL === "inner").to.be.true;

//A function has access to the variables contained within the same scope that function was created in
var name = "outer";
var fn = function () {
  ACTUAL = name;
};
fn();
expect(ACTUAL === "outer").to.be.true;

//A function's local scope variables are not available anywhere outside that function
var firstFn = function () {
  var localToFirstFn = "inner";
};
firstFn();

expect(function () {
  ACTUAL = localToFirstFn;
}).to.throw();
expect(ACTUAL === null).to.be.true;

//A function's local variables aren't available outside that function, regardless of the context it's called in
var firstFn = function () {
  var localToFirstFn = "first";
  secondFn();
};
var secondFn = function () {
  ACTUAL = localToFirstFn;
};
expect(function () {
  secondFn();
}).to.throw();

expect(function () {
  firstFn();
}).to.throw();
expect(ACTUAL === null).to.be.true;

// Precedence
var sameName = "outer";
var fn = function () {
  var sameName = "inner";
  ACTUAL = sameName;
};
fn();
expect(ACTUAL === "inner").to.be.true;

// Precedence 2
var sameName = "outer";
var fn = function () {
  var sameName = "inner";
};
fn();
ACTUAL = sameName;
expect(ACTUAL === "outer").to.be.true;

// A new variable scope is created for every call to a function
var fn = function () {
  var innerCounter = innerCounter || 10;
  innerCounter = innerCounter + 1;
  ACTUAL = innerCounter;
};
fn();
expect(ACTUAL === 11).to.be.true;
fn();
expect(ACTUAL === 11).to.be.true;

// Alpha and Omega
var fn = function () {
  var localVariable;
  if (localVariable === undefined) {
    ACTUAL = "alpha";
  } else if (localVariable === "initialized") {
    ACTUAL = "omega";
  }
  localVariable = "initialized";
};
fn();
expect(ACTUAL === "alpha").to.be.true;
fn();
expect(ACTUAL === "alpha").to.be.true;

// Inner Scope can Access Parent Scope Variables
var outerName = "outer";
var fn = function () {
  var innerName = "inner";
  ACTUAL = innerName + outerName;
};
fn();
expect(ACTUAL === "innerouter").to.be.true;

// Inner Scope can access and change Outer scope variables
var outerCounter = 10;
var fn = function () {
  outerCounter = outerCounter + 1;
  ACTUAL = outerCounter;
};
fn();
expect(ACTUAL === 11).to.be.true;
fn();
expect(ACTUAL === 12).to.be.true;

// Even after the Outer function has Returned
var outerFn = function () {
  var counterInOuterScope = 10;
  var innerIncrementingFn = function () {
    counterInOuterScope = counterInOuterScope + 1;
    ACTUAL = counterInOuterScope;
  };

  innerIncrementingFn();
  expect(ACTUAL === 11).to.be.true;
  window.retainedInnerFn = innerIncrementingFn;
};
expect(window.retainedInnerFn).to.be.a("function");
window.retainedInnerFn();
expect(ACTUAL === 13).to.be.true;

/* Advanced Scope */

// What happens first? log or the alert?
const myAlert = () => {
  const x = "Help! I think I found a clue!";
  const alerter = () => {
    alert(x);
  };

  setTimeout(alerter, 1000);
  console.log("what happens first? this log or the alert?");
};
myAlert();

// We're gonna to create a closure for each function invoke
const myAlert = () => {
  const x = "Help! I think I found a clue";
  let count = 0;
  const alerter = () => {
    //alert(`${x} ${++count}`);
    console.log(`${x} ${++count}`);
  };
  return alerter;
};

const funcAlert = myAlert();
const funcAlert2 = myAlert();
funcAlert();
funcAlert();
funcAlert();
funcAlert2();

// closure a little more complicated

const newClue = (name) => {
  const length = name.length;
  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  };
};
const didGreenDoItWithA = newClue("Green");
didGreenDoItWithA("candlestick");

// closure a little more difficult
function countClues() {
  var n = 0;
  return {
    count: function () {
      return ++n;
    },
    reset: function () {
      return (n = 0);
    },
  };
}

var counter = countClues();
var counter2 = countClues();
counter.count();
counter.count();
counter.count();
counter2.count();
counter2.count();
counter2.count();

// Closure a little more difficult, inside whatever scope the variable ask
// if are there any definition, if there is not, ask its parent scope.. :-)
const findSomeone = () => {
  const speak = () => {
    console.log(who);
  };
  let who = "Why hello there, Prof. Plum!";
  return speak;
};

const someoneSpeak = findSomeone();

// More of Closuresssssssssssss
const makeTimer = () => {
  let elapsed = 0;
  const stopwatch = () => {
    return elapsed;
  };
  const increase = () => elapsed++;

  setInterval(increase, 1000);
  return stopwatch;
};

let timer = makeTimer();

timer();
timer();
timer();

// Currying
const curry = (fn) => {
  return (arg) => {
    return (arg2) => {
      return fn(arg, arg2);
    };
  };
};
curry(1)(2); //[1,2]
