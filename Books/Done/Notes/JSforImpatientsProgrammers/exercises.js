/**
 * With for-of we can iterate over [index, element] pairs of array
 */
const arr = ["a", "b", "c"];
for (const [idx, elm] of arr.entries()) {
  console.log(idx, elm);
}

/**
 * Ordinary functions
 */

// Function declaration
function ordinary1(a, b, c) {
  //...
}

// const plus anonymous function expression
const ordinary2 = function (a, b, c) {
  //...
};

/**
 * Specialized functions
 */

// the purpose of an arrow function is to be a real function
const arrow = () => {
  return 123;
};

// The purpose of a method is to be a method
const obj = {
  myMethod() {
    return "abc";
  },
};

// The purpose of a class is to be a constructor function
class MyClass {
  /****** */
}

/**
 * Explaining why to use <this> with arrow function
 *
 * In this code, we can observe two ways of handling <this>
 * - Dynamic this: we try to access the this of .someMethod() from an ordinary function. There
 *   it is shadowed by the function-s own this, which is undefined. Given that ordinary functions
 *   receive their this via function or method calls, their this is called dynamic.
 * - Lexical this: We again try to access the this of .someMethod(). This time, we succeed because
 *   the arrow function does not have its own this. this is resolved lexically, just like any other
 *   variable. That's why the this of arrow functions is called lexical.
 */

const jill = {
  name: "Jill",
  someMethod() {
    function ordinaryFunc() {
      assert.throws(
        () => this.name
        //TypeError: Cannot read properties of undefined
      );
    }
    ordinaryFunc();

    const arrowFunc = () => {
      assert.equal(this.name, "Jill");
    };
    arrowFunc();
  },
};
jill.someMethod();

/**
 * Methods of functions: call(), apply(), bind()
 */

// The function method call() makes the implicit <this> explicit
function func(x, y) {
  return [this, x, y];
}
func.call("hi", "everybody");

// The function method .apply() specify a value for the implicit parameter <this>
function func2(x, y) {
  return [this, x, y];
}
func2.apply(1, 2);

// The function method .bind()
// Using .bind() for real functions is somewhat unintuitive because we have to provide a value
// for <this>. Given that it is undefined during function calls, it is usually set to undefined or null.
// In the following example, we create a function that has a parameter, by binding the first paramter of
// add() to 8.
function add(x, y) {
  return x + y;
}
const add8 = add.bind(undefined, 8);

/**
 * Creating Maps
 */

const emptyMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
console.log(emptyMap);

const map = new Map();
map.set(1, "one");
map.set(2, "two");
map.set(3, "three");
console.log(map);
console.log(map.size);

for (const key of map.keys()) {
  console.log(key);
}

// COUnting characters
function countChars(chars) {
  const charCounts = new Map();
  for (let ch of chars) {
    ch = ch.toLowerCase();
    const prevCount = charCounts.get(ch) ?? 0;
    charCounts.set(ch, prevCount + 1);
  }
  return charCounts;
}
console.log(countChars("AaaaaBbbCcAb"));

/**
 * USING SETS
 */
// Creating Sets
const emptySet = new Set();
console.log(emptySet.size);

const set2 = new Set(["red", "green", "blue"]);
console.log(set2.size);

const set3 = new Set();
set3.add("jio");
set3.add("jio2");
set3.add("jio4");
console.log(set3.size);

// checks if an element is a member of a Set
console.log(set3.has("red")); // => false

// remove an element from a Set
console.log(set3.delete("jio")); // => true

// clearing a set
console.log(set3.clear()); // => undefined

/**
 * DESTRUCTURING
 */

const arr2 = ["a", "b", "c"];
const [x, y] = arr2;
console.log(x, y);

// Object-destructuring
const address = {
  street: "Evergreen Terrace",
  number: "742",
};
const { street: s, city: c } = address;
console.log(s, c);

// Primitive values destructuring
const { length: l } = "abc";
console.log(l);

// Array destructuring
const { 0: xx, 2: yy } = ["a", "b", "c"];
console.log(xx, yy);

// Rest Properties
const obj2 = { a: 1, b: 2, c: 3 };
const { a: propValue, ...remaining } = obj2;
console.log(propValue);

// Default values
const { prop: p = 123 } = {};
console.log(p);

const [x3 = 1, y3 = 2] = [];
console.log(x3, y3);

/**
 * SYNCHRONOUS GENERATORS
 */

// Generator function declaration
function* genFunc1() {
  /****/
}

// Generator function expression
const genFunc2 = function* () {
  /****/
};

// Generator method definition in an object literal
const obj3 = {
  *generatorMethod() {
    /****/
  },
};

//Generator method definition in a class definition
class MyClass {
  *generatorMethod() {
    //...
  }
}

// Generator functions return iterables and fill them via yield
function* genFunc4() {
  yield "a";
  yield "b";
}
const iterable = genFunc4();
console.log(Array.from(iterable)); // => ['a', 'b']

/**
 * Promises
 */
// Returning a non-promise value
var callApi = setTimeout(() => {
  console.log("200 Ok");
}, 2000);

Promise.resolve(callApi).then((x) => {
  return x;
});

const myCustomError = new Error("An error happen");
Promise.reject(myCustomError).catch((x) => {
  console.log(x);
});

// Returning a promise
var secondCallApi = setTimeout(() => {
  console.log("Thanks for wait");
}, 4000);
var firstCallApi = setTimeout(() => {
  console.log("Calling second callapi");
}, 2000);

Promise.resolve(firstCallApi)
  .then((x) => {
    return Promise.resolve(secondCallApi);
  })
  .then((x2) => {
    x2;
  });
