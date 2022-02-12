/**[].flatMap()
 * This method works like .map() but lets the callback return Arrays of zero or more values
 * instead of single values. The returned Arrays are then concatenated and become the result of .flatMap().
 * Use cases include:
 * <Filtering and mapping at the same time>
 * <Mapping single input values to multiple output values>
 */
[]
  .flatMap()

  [
    /**[].flat()
     * This method converts nested Arrays into flat Arrays. Optionally, we can tell it at which depth
     * of nesting it should stop flattening.
     */
    (2, 3)
  ].flat();

/*
 * Object.fromEntries() creates an object from an iterable over entries. Each entry is a two-element
 * Array with a property key and a property value.
 */

Object.fromEntries();

/**String methods
 * .trimStart() and .trimEnd() work like .trim() but remove whitespace only at the start or only at the
 * end of a string.
 */
"".trimStart();
"".trimEnd();

/**Optional catch binding
 * We can now omit the parameter of a catch clause if we don't use it.
 */

//  => nothing to show...

/**
 * Symbol.prototype.description is a getter for reading the description of a symbol.
 * Previouly, the descirption was included in the result of .toString() but couldn't be accessed
 * individually.
 */
Symbol.prototype.description;
