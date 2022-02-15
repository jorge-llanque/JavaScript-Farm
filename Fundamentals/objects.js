/*--------------------------------- OBJECTS --------------------------------------*/
/*--------------------------------------------------------------------------------*/

let o = new Object();
o.name = "jorge";
console.log(o); // => {name: 'jorge'}

let person = { hands: "two", foot: "two", hungry: false };
let animal = { sentiments: true, hungry: true };
let humans = Object.assign(animal, person);
console.log(humans); // => { sentiments: true, hungry: false, hands: 'two', foot: 'two' }

let onlyPerson = Object.assign({}, person);
console.log(onlyPerson); // => { hands: 'two', foot: 'two', hungry: false }

let phonesPrices = {
  Samsung: 172.25,
  Huawei: 100.0,
  Xiomi: 250.36,
  Iphone: 156.55,
};
const g = Object.entries(phonesPrices);
console.log(g.map((a) => a[0])); // => [ 'Samsung', 'Huawei', 'Xiomi', 'Iphone' ]
console.log(Array.isArray(g)); // => true
for (const [key, value] of Object.entries(phonesPrices)) {
  console.log(`${key} is ${value}`); // => Samsung is 172.25
} // => Huawei is 100
// => Xiomi is 250.36
// => Iphone is 156.55

const confidentialInfo = {
  dead: 104020000,
  children: 10402,
  women: 100002,
  men: 3293942,
};
Object.freeze(confidentialInfo);
confidentialInfo.dead = 0;
console.log(confidentialInfo.dead); // => 104020000

let array = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];
const obj = Object.fromEntries(array);
console.log(obj); // => { a:1, b:2, c: 3 }

let subjects = {
  maths: 23,
  physics: 19,
  logic: 49,
  databases: 90,
};
let arrayPropertyNames = Object.getOwnPropertyNames(subjects);
console.log(arrayPropertyNames); // => [ 'maths', 'physics', 'logic', 'databases' ]

let ages = {
  Michael: 12,
  Mary: 44,
  George: 23,
  Mathew: 22,
};
let arrayKeys = Object.keys(ages);
console.log(arrayKeys); // => [ 'Michael', 'Mary', 'George', 'Mathew' ]

let carrees = {
  Andy: "Systems",
  Jane: "Bussiness",
  George: "Software Engineering",
};
console.log(Object.values(carrees)); // => [ 'Systems', 'Bussiness', 'Software Engineering' ]

const obj = { id: 1, name: "joder" };
const newObj = { ...obj };
console.log(newObj); // => { id: 1, name: 'joder' }

const hoy = new Date();
let fecha = hoy.getDate();
console.log({ fecha }); // => { fecha: 5 }

let diaSemana = hoy.getDay();
console.log({ diaSemana }); // => { diaSemana: 6 }

let anio = hoy.getFullYear();
console.log({ anio }); // => { anio: 2022 }

let mes = hoy.getMonth() + 1;
console.log(mes); // => 2

var miAuto = new Object();
miAuto.marca = "Ford";
miAuto.modelo = "Mustang";
miAuto.anio = 1969;
console.log(miAuto); // => { marca: 'Ford', modelo: 'Mustang', anio: 1969 }

/* Access with dots*/
var person = {};
person.name = "Mrs. White";

var who = person.name;

person.name = "Mr. White";
console.log(who);

/* Arrays */
var person2 = [];
person2.name = "bla";
var who = person2.name;
console.log(person2);
console.log(typeof person === "array");

/* Bracket notation */
var person3 = [];
person3.name = "sdf";
person3[0] = "sdfxcv";
console.log(person3);

//Array Destructuring for a variable declaration
const [first, second] = ["hi", "babe"];
var [first, second] = [true, false];
let [first, second] = [001, 002];

// Object Destructuring for a variable declaration
const { first, second } = { first: 1, second: 4 };
let { first, second } = { first: "sd", second: "vv" };
var { first, second } = { first: true, second: false };

// omit one
const [a, , b] = [1, 2, 3];

// Combine with spread/rest operator
const [c, ...d] = [1, 2, 3];

// Advance deep arrays
var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
console.log(`a:${a}, b:${b}, c:${c}, d:${d}`);

// Combine destructuring of objects and arrays
var {
  prop: x,
  prop2: [, y],
} = { prop: 5, prop2: [10, 100] };

// Using as method parameters
var foo = function ({ prop: x }) {
  console.log(x);
};
foo({ prop: 1 });

// Can also use with the advanced example
var foo = function ({
  prop: x,
  prop2: {
    prop2: { nested: b },
  },
}) {
  console.log(x, ...b);
};
foo({
  prop: "Hello",
  prop2: {
    prop2: {
      nested: ["a", "b", "c"],
    },
  },
});

// Computed property names
const name = "fieldName";
const computedObject = { [name]: name };
const { [name]: nameValue } = computedObject;
console.log(nameValue);

// Woops
var users = [{ user: "name1" }, { user: "name2" }, { user: "name3" }];

var names = users.map(({ user: fuckname }) => fuckname);
// OR users.map(({user}) => user);
console.log(names);

const a = {};
const b = a;
b.name = "li";
console.log(b, a); // => {name: 'hi'} {name: 'hi'}

/* EXERCISES */
const { me, she, c } = {
  me: 201,
  she: 102,
  c: function (a, b) {
    return a.toString().split("").reverse().join("") === b.toString()
      ? "Palindrome!!!!!"
      : "nope";
  },
};
console.log(she);
console.log(c(me, she));

// Counting nesting objects

var person = {
  name: "Ram",
  age: 27,
  children: ["as", "we"],
  vehicles: {
    car: "limousine",
    bike: "ktm-duke",
    airlines: {
      lufthansa: "Air123",
      Brithis_Airways: "Brt707",
      year: ["2021", "2022"],
    },
  },
};

let count = 0;
function nestedObjects(person) {
  for (let obj of Object.keys(person)) {
    if (typeof person[obj] === "object") {
      count++;
      nestedObjects(person[obj]);
    }
  }
  return count;
}

console.log(nestedObjects(person));
