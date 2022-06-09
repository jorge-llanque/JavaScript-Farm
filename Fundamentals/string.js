/*--------------------------------- STRINGS --------------------------------------*/
/*--------------------------------------------------------------------------------*/

let numberToString = String(234);
console.log(typeof numberToString); // => string

let phrase = "Never stop learning";
console.log(phrase[12]); // => e
console.log(phrase.length); // => 19

let phrase2 = "aaa \
bbb \
               ccc";
console.log(phrase2); // =>  aaa bbb                ccc

let firstPhrase = "Hello";
let secondPhrase = "World";
console.log(firstPhrase.concat("/", secondPhrase)); // => Hello/World

let a = "abc";
let isContain = a.includes("b");
console.log(isContain); // => true

let b = "how you been";
let isContainBeen = b.endsWith("been");
console.log(isContainBeen); // => true

let c = "Who are you?";
let whereIsAre = c.indexOf("are");
console.log(whereIsAre); // => 4

let d = "hot dog of dog hot";
let lastIndex = d.lastIndexOf("dog");
console.log(lastIndex); // => 11

let e = "hot ";
let repeatWord = e.repeat(10);
console.log(repeatWord); // => hot hot hot hot hot hot hot hot hot hot

let f = "Hello everything";
let replaceAword = f.replace("everything", "Jorge");
console.log(replaceAword); // => Hello Jorge

let g = "Hello guys";
let whereIsY = g.search("y");
console.log(whereIsY); // => 8

let h = "This is my first program";
console.log(h.slice(2)); // => is is my first program

let i = "My favorite movie is Avatar";
console.log(i.split(" ")); // => [ 'My', 'favorite', 'movie', 'is', 'Avatar' ]
console.log(i.split("")); // => ['M', 'y', ' ', 'f', 'a', 'v', 'o', 'r', 'i', 't', 'e', ' ', 'm', 'o', 'v', 'i', 'e', ' ', 'i', 's', ' ', 'A', 'v', 'a', 't', 'a', 'r']
console.log(i.split("mo")); // => [ 'My favorite ', 'vie is Avatar' ]

let j = "I have two girlfriends";
console.log(j.startsWith("I")); // => true

let k = "Happy to be here";
console.log(k.substring(0, 5)); // => Happy

let l = "A good day";
console.log(l.toUpperCase()); // => A GOOD DAY
console.log(l.toLowerCase()); // => a good day

let m = "  Bad day    ";
console.log(m.trim()); // => Bad day

let str = "";
str += "<b>";
str += "Hello!";
str += "</b>";
console.log(str); // => <b>Hello!</b>

const padNumber = "8".padStart(3, "0");
console.log(padNumber); // => 008

const padWord = "yes".padEnd(6, "!");
console.log(padWord); // => yes!!!

/**
 * One of the best way to concatenates is  using
 * assignment operator += because internaly JS Engine
 * optimize it.
 */
let str = "";
str += "Say it";
str += "one more";
str += " time";
console.log(str); // => Say it one more time

/**
 * These are three ways of converting a value to string
 * RECOMMENDATION (use String())
 */
String(x);
"" + x;
x.toString(); // => does not work for undefined  and null

/**
 * Stringifying objects
 */
String({ a: 1 });
// => '[object Object]'

String(["a", "b"]);
// => 'a,b'

String(["a", ["b"]]);
// => 'a,b'

/**
 * Stringifying functions
 */
String(function f() {
  return 4;
});
// => 'function f(){return 4}'

/**
 * An alternate way of stringifying values
 * The JSON data format is a text representation of js values.
 * Therefore, JSON.stringify() can also be used to convert values to strings.
 */
JSON.stringify({ a: 1 });
// => '{"a":1}'
JSON.stringify(["a", ["b"]]);
// => '["a",["b"]]'

console.log(JSON.stringify({ first: "Jane", last: "Doe" }, null, 2));


let acum = 0;
let arr = [4,2,0,0,-1,-6];
for(let i = 0; i < arr.length; i++){
  if(i === arr.length -1) break
  acum += arr[i] - arr[i + 1];
}
console.log(acum)









function a(word){
  let box = Array.from(word.toLowerCase().split(""),(v, k) => 'aeiouy'.includes(v) && k);
  return box.filter(elem => Number.isInteger(elem))
}

console.log(a('abbyYFWei'));




function ab(num){
  let count = 0;
  for(let i = 1; i<=num; i++){
    console.log(i)
    if(num % i == 0){
      console.log('yes')
      count++
    }
  }
  return count
}

console.log(ab(4))