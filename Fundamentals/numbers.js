/**
 * Numbers
 */

let money = 343;
console.log(Number.isInteger(money)); // => true

console.log(Math.min(1, 5, 3, 2, 0, 5)); // => 0

console.log(Math.max(4, 3, 1, 22, 23, 100, 101)); // => 101

let isPositive = 12;
console.log(Math.sign(isPositive)); // => 1

const numberFromConstructor = Number(123);
console.log(numberFromConstructor); // => 123

const numberFromConstructor2 = new Number(123);
console.log(numberFromConstructor2.valueOf()); // => 123

const isIntegerValue = Number.isInteger("2343");
console.log(isIntegerValue); // => false

const parseToNumber = Number("33");
console.log(parseToNumber); // => 33
console.log(Number(true)); // => 1