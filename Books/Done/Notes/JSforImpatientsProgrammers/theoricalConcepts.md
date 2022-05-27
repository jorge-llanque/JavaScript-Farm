## CHAPTER FIVE - CONTROL FLOW AND DATA FLOW
### 23. Control flow statements
- The for-in loop visits all enumerable property keys of an object. When looping over an Array, it is rarely a good choice:
  * It visits property keys, not values.
  * As property keys, the indices of Array elements are strings, not numbers.
  * It visits all enumerable property keys, not just those of Array elements.
  ```
  const arr = ['a', 'b', 'c'];
  arr.propKey = 'property value';

  for(const key in arr){
      console.log(key);
  }
  // Output:
  // '0'
  // '1'
  // '2'
  // 'propKey'
  ```

  #### Recommendations for looping
  - If you want to loop over an asynchronous iterable, you must use for-await-of.
  - For looping over a synchrous iterable, you mus to use for-of. Note that Arrays are iterables.
  - For looping over an Array, you can use .forEach()
  - Don't use for-in to loop over an Array.

### 24. Exception-handling
try to memorize, please
| Subclasses   | Description |
|:-------------|:------------|
|AgregateError | Represents multiple errors at once|
|RangeError    | Indicates a value that is not in the set or range of allowable values.|
| ReferenceError| Indicates that an invalid reference value has been detected.|
|SyntaxError    | Indicates that a parsing error has occurred.|
|TypeError      | Is used to indicate an unsuccessful operation when none of the other NativeERror objects are an appropriate indication of the failure cause.|
|URIError       | Indicates that one of the global URI handling funcitons was used in a way that is incompatible with its definition.|

* Chaining errors via error.cause [ES2022]
  Since ECMAScript 2022, new Error() lets us specify what caused it.
  ```
  function readFiles(filePaths){
      return filePaths.map(
          (filePath)=>{
              try{
                  // ...
              }catch(error){
                  throw new Error(
                      'An error happend',
                      {cause: error}
                  )
              }
          }
      )
  }
  ```

### 25. Kinds of functions
* JavaScrip has two categories of functions:
  - An **ordinary function** can play several roles:
    - Real function
    - Method
    - Constructor function
  - A **specialized function** can only play one of those roles:
    - An arrow function can only be a real function.
    - A method can only be a method.
    - A class can only be a constructor function.
* Terminology: function definitions and function expressions:
    - A function definition is syntax that creates functions:
      - A function declaration.
      - A function expression.
    - Function declaration always produce ordinary functions. Function expressions produce either ordinary functions or specialized functions:
      - Ordinary function expression:
        - Anonymous function expressions.
        - Named function expressions.
      - Specialized function expressions:
        - Arrow functions
  - While function declaration are still popular in JS, function expressions are almost always arrow functions in modern code.
* Arrow functions were added to JS  for two reasons:
  * To provide a more concise way for creating functions
  * They work better as real functions inside methods: Methods can refer to the object that received a method call via the special variable **this**. Arrow functions can access the **this** of a surrounding method, ordinary functions can't (because they have their own **this**).
* The special variable **this** is an object-oriented feature.
* Terminology: parameters vs arguments
  * Parameters are part of a function definition.
  * Arguments are part of a function call.
* Spreading and rest parameters use the same syntax (...) but they serve opposite purposes:
  * Rest parameters are used when defining functions or methods. They collect arguments into Arrays.
  * Spread arguments are used when calling functions or methods. They turn iterable objects into arguments.
* THIS For anonymous inline function expressions, arrow functions are clear winners, due to their compact syntaxt and them not having <this> as an implicit parameter.
* THIS For stand-alone named function declarations, arrow functions still benefit from lexical <this>. But function declarations (which produce ordinary functions) have nice syntax and early activation is also occasionally useful. If <this> doesn't appear in the body of an ordinary function, there is no downside to using it as a real function.

## CHAPTER VII - COLLECTIONS
### Synchronous iteration
- Synchronous iteration is a protocol that connects two groups of entities in JS.
  - **Data sources:** 