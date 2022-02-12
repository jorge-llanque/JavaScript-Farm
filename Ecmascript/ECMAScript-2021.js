// Lets us replace all matches of a regular expression or a string
var word = "aaaxaaa";
var replaceAllMatch = word.replaceAll("a", "b"); // => bbbxbbb

// Promise.any() returns a promise that is fullfilled as soon as the first Promise in an iterable of Promises is fullfilled.
// If there are only rejectios, they are put into an AggregateError which becomes the rejection value.
Promise.any();

// Logical Assignment operators
a ||= b;
a &&= b;
a ??= b;

// Underscore as separators in NumberLiterals and BigIntLiterals
123_456_23;
6_000_000_000_000_000n;

// WeakRefs
