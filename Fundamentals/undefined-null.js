/*Ocurrences of undefined*/

// Uninitialized variable
let myVar;
assert.equal(myVar, undefined);

// Parameter x is not provided
function func(x) {
  return x;
}
assert.equal(func(), undefined);

// Property .unknowProp
const obj = {};
assert.equal(obj.unknownProp, undefined);

/* Ocurrences of null */

// Object.prototype does not have a prototype
Object.getPrototypeOf(Object.prototype) > // => null
  // match a expression against a string
  /a/.exec("x"); // => null

/* Checking for undefined or null */

// Checking for either
// => if(x === null)
// => if(x === undefined)

// Does x have a value
if (x !== undefined && x !== null) {
  //...
}
if (x) {
  // truthy?
  // => x is neither: undefined, null, false, 0, Nan, ''
}

// Is x either undefined or null?
if (x === undefined || x === null) {
  //...
}
if (!x) {
  // falsy?
  // => x is: undefined, null, false, 0, Nan, ''
}

/** Example 1
 * If there are one or more matches for regex inside str, then .match()
 * returns an Array. If there are no matches, it unfortunately returns null
 * (and not the empty Array). We fix that via ?? operator
 *  */

function countMatches(regex, str) {
  const matchResult = str.match(regex); // null or Array
  return (matchResult ?? []).length;
}
assert.equal(countMatches(/a/g, "ababa"), 3);
// solution
// => return matchResult?.length ?? 0;

/** Example 2
 * Specifying a default value for a property
 */
function getTitle(fileDesc) {
  return fileDesc.title ?? "(Untitled)";
}
const files = [{ path: "index.html", title: "Home" }, { path: "tmp.html" }];
assert.deepEqual(
  files.map((f) => getTitle(f)),
  ["Home", "(Untitled)"]
);

/**Example 3
 * Using destructuring for default values.
 * In some cases, destructuring can also be used for default values.
 */
function getTitle(fileDesc) {
  const { title = "(Untitled)" } = fileDesc;
  return title;
}

/**Legacy approach:using logical Or (||) for default values
 * Before ECMAScript 2020 and the nullish coalescing operator, logical Or was used for
 * default values. That has a downside.
 */

// This operator || works as expected for undefined and null
undefined || "defualt"; // => 'default'
null || "default"; // => 'default'
// ... but it also returns the default for all other falsy values - for example:
false || "default"; // => 'default'
0 || "default"; // => 'default'
0n || "default"; // => 'default'
"" || "default"; // => 'default'

// ...compare that to how ?? works
undefined ?? "default"; // => 'default'
null ?? "default"; // => 'default'
false ?? "default"; // => false
0 ?? "default"; // => 0
0n ?? "default"; // => 0n
"" ?? "default"; // => ''

/** Example 4:
 * Using ??= to add missing properties
 */
const books = [
  { isbn: "123" },
  { title: "ECMAScript Language Specification", isbn: "456" },
];
// Add property .title where it's missing
for (const book of books) {
  book.title ??= "(Untitled)";
}
assert.deepEqual(books, [
  { isbn: "123", title: "(Untitled)" },
  { title: "ECMAScript Language Specification", isbn: "456" },
]);

/** undefined and null don't have properties
 * Undefined and null are the only two JavaScript values where we get an exception
 * if we try to read a property. To explore this phenomenon, let's use the following function,
 * which reads ("gets") property .foo and returns the result
 */
function getFoo(x) {
  return x.foo;
}
// => getFoo(undefined)
// > TypeError: Cannot read properties of undefined (reading 'foo')
// => getFoo(null)
// > TypeError: Cannot read properties of null (reading 'foo')

// => getFoo(true)
// > undefined
// => getFoo({})
// > undefined
