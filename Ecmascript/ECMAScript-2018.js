/**Asynchronous iteration
 * Is the asynchronous version of synchronous iteration. It is based on Promises.
 * With synchronous iterables, we can immediately access each item. With asynchronous iterables,
 * we have to await before we can access an item.
 * With synchronous iterables, we use for-of loops. With asynchronous iterables, we use
 * for-await-of loops.
 */

//  => nothing to show

/**Spreading into object literals
 * By using spreading (...) inside an object literral, we can copy the properties of another object
 * into the current one. One use case is to create a shallow copy of an object obj:
 */

const shallowCopy = { ...obj };

/** Rest properties (destructuring)
 * When object-destructuring a value, we can now use rest syntax (...) to get all previously
 * unmentioned properties in an object.
 */
const { a, ...remaining } = { a: 1, b: 2, c: 3 };

/**
 * Promise.prototype.finally() is related to the finally clause of a try-catch-finally statement -
 * similarly to how the Promise method .then() is related to the try clause and .catch() is related
 * to the catch clause.
 * On other words: The callback of .finally() is executed regardless of whether a Promise is fulfilled
 * of rejected.
 */

Promise.prototype.finally();

/**
 * RegExp named capture groups: In addition to accessing groups by number, we can now name them
 * and access them by name.
 */
const matchObj = "---756---".match(/(?<digits>[0-9]+)/);
assert.equal(matchObj.groups.digits, "756");

/**
 * RegExp lookbehind assertions complement lookahead assertions:
 * Positive lookbehind: (?<=X) matches if the current location is preceded by 'X'.
 * Negative lookbehind: (?<!X) matches if the current location is not preceded by '(?<!X)'
 */

// => NOTHING TO SHOW

/**
 * s(dotAll) flag for regular expressions. If this flag is active, the dot matches line terminators
 * (by default, it doesn't).
 */

// => nothing to show

/**
 * RegExp Unicode property escapes give us more power when matching sets of Unicode code points - for example:
 * > /^\p{Lowercase_Letter}+$/u.test('dfdf')
 * true
 * > /^\p{White_Space}+$/u.test('\n \t')
 * true
 * > /^\p{Script=Greek}+$/u.test('dfe')
 * true
 */

/** Template Literal revision
 * Allows text with backslashes in tagged templates that is illegal in string literals
 */

windowPath`C:\Usuarios\jorgessd\.viminfo`;
