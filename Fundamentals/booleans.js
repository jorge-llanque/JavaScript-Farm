/**
 * Converting values to booleans 
 */
Boolean(undefined); // => false
Boolean(null); // => false
Boolean(true); // => true
Boolean(false); // => false
Boolean(0); // => false
Boolean(NaN); // => false
Boolean(1); // => true
Boolean(""); // => false
Boolean("anyword"); // => true
Boolean(symbol); // => true
Boolean(object); // => true

/**
 * Logical AND (X && Y)
 */
false && true; // => false
false && "abc"; // => false
true && "abc"; // => 'abc'
"" && "abc"; // => 'abc'


/**
 * Logical Assignment Operator
 */
 const a = false;
 a ||= "23";
 console.log(a); // => 23
 
 let a2 = 100;
 a2 &&= 101;
 console.log(a2); // => 101
 
 let a3 = null;
 a3 ??= 200;
 console.log(a3); // => 200
 