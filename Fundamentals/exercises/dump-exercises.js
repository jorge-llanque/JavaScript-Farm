// Calculate if a number is odd or even
const message = {
  INVALID_NUMBER: "Is not a valid number",
  ODD_NUMBER: "Is Odd number",
  EVEN_NUMBER: "Is Even number",
};
function isOddOrEven(number) {
  let log =
    (typeof number !== "number" || !Number.isInteger(number)) &&
    message.INVALID_NUMBER;

  if (!log) {
    log = number % 2 === 0 ? message.EVEN_NUMBER : message.ODD_NUMBER;
  }

  return log;
}
//console.log(isOddOrEven(0))

// Calculate if a word is a palindrome
function isPalindrome(word) {
  let log = typeof word !== "string" && "is not a valid word";

  if (!log) {
    word = word.toUpperCase();
    for (let i = 0; i <= word.length / 2; i++) {
      log = "is palindrome";
      if (word[i] !== word[word.length - (i + 1)]) {
        log = "is not a palindrome";
        break;
      }
    }
  }
  return log;
}
//console.log(isPalindrome('HANNAh'))

const convertToUpper = (string) =>
  typeof string === "string" ? string.toUpperCase() : null;

const sumTwoSmallestNumbers = (numbers) => {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
};

const last2EvenNUmbers = () => {
  return null;
};

/**
 * STRINGS
 * typeof
 * [] vs at()
 * length
 * concat
 * includes
 * endsWith
 * indexOf
 * lastIndexOf
 */

console.log(typeof "as"); // string
console.log(typeof "123"); // string
console.log(typeof "undefined"); // string
console.log(typeof "null"); // string
console.log(typeof "false"); // string
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof 0); // number
console.log(typeof true); // boolean
console.log(typeof 234.3232); // number
console.log(typeof undefined); // undefined
console.log(typeof null); // object

let text = "asavevevewfsfsf";
console.log(text[3]); // v
console.log(text[-3]); // undefined
console.log(text.at(3)); // v
console.log(text.at(-3)); // f
console.log(text.length); // 15
console.log(text.concat("ZZZ")); // asavevevewfsfsfZZZ
console.log(text.concat("A", "B", "C")); //asavevevewfsfsfABC
console.log(text.concat(["X", "Y", "Z"])); // asavevevewfsfsfX,Y,Z
console.log(text.concat([12, 123, 45, 5])); // asavevevewfsfsf12,123,45,5
console.log(text.concat(false)); // asavevevewfsfsffalse

let text2 = "dfdsssfgsggsf";
console.log(text2.includes("f")); // true
console.log(!text2.includes("f")); // false

console.log(text2.endsWith("f")); // true
console.log(!text2.endsWith("f")); // false
console.log(text2.indexOf("s")); // 3
console.log(text2.indexOf("sss")); // 3
console.log(text2.indexOf(undefined)); // -1

let text3 = "hi hello";
console.log(text3.repeat(3)); // hi hellohi hellohi hello
console.log(text3); // hi hello

let text4 = "hello,df..sfw:;bye,,";
console.log(text4.replace(",", "|"));
text4.replace();


// Convert to String
console.log(String('sfe'));

// Validate if contains a value
const val = 'asdfe323fs_-__2f2';
console.log(val.includes('?', 5));  // => false

const val2 = 'sad we a vds';
console.log(val2.endsWith('we')) // => false
console.log(val2.indexOf('we',9)) // => -1
console.log(val2.search('we')) // => 4
console.log(val2.slice()) // => sad we a vds
console.log(val2.split()) // => ['sad we a vds']

// string to number and reverse
console.log(parseInt('123',10));
console.log(String(234))

//string to array and reverse
console.log('awef-+=-)0_+\\'.split());
console.log(String([1,34,'23'])); // 1,34,23

// string to object and reverse
console.log(JSON.parse('{"fa":23, "fe":90}'));
console.log(JSON.stringify({as:23,wd:34})); // {"as":23, "wd":34}

// string to boolean and reverse
console.log(typeof JSON.parse('true')) // boolean
console.log(String(false))

/**
 * ARRAYS
 */

//
console.log(Array.from('woifw0239)9(+_=-"|""'));
console.log(Array.from([2,4,6,24,5,3,2], (_, k)=> {
  if(k %2===0) return k
}))




/**
 * otros
 */

const frase = "asd wer we 2 23";
console.log(frase.replaceAll(" ","").length)







module.exports = {
  isOddOrEven,
  isPalindrome,
  convertToUpper,
  sumTwoSmallestNumbers,
  last2EvenNUmbers,
};
