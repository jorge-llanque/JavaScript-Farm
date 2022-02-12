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
