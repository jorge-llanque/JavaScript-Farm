/** Converting values to booleans */
Boolean(undefined); // => false
Boolean(null); // => false
Boolean(true); // => true
Boolean(false); // => false
Boolean(0); // => false
Boolean(Nan); // => false
Boolean(1); // => true
Boolean(""); // => false
Boolean("anyword"); // => true
Boolean(symbol); // => true
Boolean(object); // => true

/** Logical AND (x && y) */
false && true; // => false
false && "abc"; // => false
true && "abc"; // => 'abc'
"" && "abc"; // => 'abc'
