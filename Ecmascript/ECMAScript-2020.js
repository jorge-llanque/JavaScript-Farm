/**
 * Dynamic imports via: import()
 * The normal import statement is static, we can only use it at the top levels of modules and its module
 * specifier is a fixed string. import() changes that. It can be used anywhere (including conditional statements)
 * and we can compute its argument.
 */

import()


/** import.meta
 * Contains metadata for the current module. Its first widely supported property is import.meta.url
 * which contains a string with the URL of the current module's file.
 */

import.meta

/** Namespace re-exporting
 * The following expression imports all exports of module 'mod' in a namespace object ns and exports that object.
 */

export * as ns from 'mod';


/** Optional chaining for property accesses and method calls.
 * One example of optional chaining is value.?prop
 * This expression evalueates to undefined if value is either undefined or null. Otherwise, it evaluates
 * to value.prop. This feature is especially useful in chains of property reads when some of the properties
 * may be missing.
 */

var a = {};
var b = a.b?.value;


/** Nullish Coalescing operator (??)
 * This expression is defaultValue if value is either undefined or null and value otherwise.
 * This operator lets us use a default value whenever something is missing.
 * Previously the Logical Or operator (||) was used in this case but it has downsides here
 * because it returns the default value whenever the left-hand side is falsy (which isn't always correct)
 */

value ?? defaultValue


/** Bigints - arbitrary-presision integers.
 * Bigints are a new primitive type. It supports integer numbers that can be arbitrarily large
 * (storage for them grows as necessary).
 */

// Nothing to show.............


/** String.prototype.matchAll()
 * This method throws if flag /g isn't set and returns an iterable with all match objects for a given string.
 */
'asdasd'.matchAll('s');


/** Promise.allSettled()
 * receives an iterable of Promises. It returns a Promise that is fullfilled once all the input Promises are settled.
 * The fullfillment value is an Array with one object per input Promise - either one of
 */

// =>  {status: 'fullfilled', value: <<fullfillment value>> }
// =>  {status: 'rejected', reason: <<rejection value>> }


/** global This
 * Provides a way to access the global object that works both on browsers and server-side platforms such
 * as Node.js and Deno.
*/

this


/** for-in mechanics*/

// => Nothing to show