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
### Cheat Sheet: Arrays
- Adding value destructively
  ```
  const arr = ['a','b'];
  arr.push('c')
  ```
- Adding value non-destructively
  ```
  const arr = ['a', 'b', 'c'];
  const b = [...arr, 'c'];
  ```
- Clearing Arrays
  ```
  // Destructive - affects everyone referring to the Array
  const arr = ['a', 'b', 'c'];
  arr.length = 0;

  // Non-destructive - does not affect others referring to the Array
  let arr2 = ['a', 'b', 'c'];
  arr2 = [];
  ```

- Removing an Array element at a given index:
  ```
  // remove non-destructively
  const arr = [1,2,3];
  arr.filter(x => x !== 1);

  // remove destructively
  const arr = [10, 20, 30];
  arr.splice(1,1)
  ```
- Looping array elements:
  ```
  for(const elem of arr){
    ...
  }
  ```
- Looping over index-value elements:
  ```
  for(const [index, value] of arr.entries()){
    console.log(index, value)
  }
  ```
- Creating and filling arrays when we can't use array literals(e.g. because we don't know their lengths in advance or they are too large):
  ```
  new Array(4).fill(0)
  // => [0,0,0,0]
  ```
- Computing a summary of an array
  ```
  const arr = [100,200,300];
  arr.some(x => x === 200);
  // => true
  
  arr.every(x => x === 200);
  // => false

  arr.join('-')
  // => '100-200-300'
  ```
- Reversing and filling
  ```
  const arr = [100,200,300];
  arr.reverse();
  // => [300,200,100]

  arr.fill(0);
  // => [0,0,0]
  ```
- Finding array elements
  ```
  const arr =[100,200,300, 300];
  
  arr.includes(100);
  // => true

  arr.indexOf(200)
  // => 1

  arr.lastIndexOf(300);
  // => 3

  arr.find(x => x==100)
  // => 100

  arr.findIndex(x => x===100);
  // => 0
  ```
- Reading single elements
  ```
  [100,200,300].at(0)
  // => 100
  [100,200,300].at(-1)
  // => 300
  [100,200,300].[-1]
  // => 'non-element property'
  ```
- Clearing Arrays
  - The latter approach has the advantage of not affecting other locations that pint to the same Array. If, however, we do want to reset a shared Array for everyony, then we need the former approach.
  ```
  const arr = ['a', 'b', 'c'];
  arr.length =0;
  // this convert arr to []
  arr = [];
  // this way convert arr to [] too.
  ```
- Arrays: listing indices and entries
  ```
  // Method .keys() lists the indices
  Array.from(['a','b'].keys())
  // => [0,1]

  // Method .entries() lists the contents of and array
  Array.from(['a','b'].entries())
  // => [[0,'a'], [1,'b']]
  ```
- Is a value an Array?
  ```
  [] instanceof Array
  // true

  Array.isArray([])
  // true

  typeof []
  // 'object'
  ```
- Do we need to create an Array filled with a primitive value?
  ```
  > new Array(3).fill({});
  // => [{},{},{}]
  ```
- Do we need to create a range of integers?
  ```
  function createRange(start, end){
    return Array.from({length:end-start}, (_,i) => i+start);
  }
  createRange(2,5);
  // => [2,3,4]
  ```

- .map() and .flatMap() take a function callback as a parameter that controls how an input Array is translated to an output Array:
  - With .map(), each input Array element is translated to exactly one output element. That is, callback returns a single value.
  - With .flatMap(), each input Array element is translated to zero or more output elements. That is, callback returns an Array of values (it can also return non-Array values, but that is rare).
  ```
  const arr = ['a', 'b', 'c'];

  arr.flatMap(x => [x,x])
  // => ['a', 'a', 'b', 'b', 'c', 'c']

  arr.flatMap(x => [x])
  // => ['a', 'b', 'c']

  arr.flatMap(x => [])
  // => []
  ```
- The result of the Array method .map() always has the same length as the Array it is invoked on. That is, its callback can't skip Array elements it isn't interested in. The ability of .flatMap() to do so is useful in the next example.
```
const results = [
  {value: 1},
  {error: new Error('Illegal value: -5')},
  {value: 6},
];

const values = results.flatMap(
  result => result.value ? [result.value] : [];
)
// => [1,6]

const errors = results.flatMap(
  result => result.error ? [result.error] : [];
)
// => [new Error('Illegal value: -5')]
```

- Method .reduce() is a powerful tool for computing a "summary" of an Array arr. A summary can be any kind of value:
  - A number. For example, the sum of all elements of arr.
  - An array. For example, a copy of arr, where each element is twice the original element.
  ```
  // Let's look at an example of .reduce() in action
  function addAll(arr) {
    const startSum = 0;
    const callback = (sum, elem) => sum + elem;
    return arr.reduce(callback, startSum);
  }
  addAll([1,2,3])
  // => 6

  // Finding indices via .reduce()
  const NOT_FOUND = -1;
  function indexOf(arr, searchValue){
    return arr.reduce(
      (result, elem, index) => {
        if(result !== NOT_FOUND){
          return result;
        }else if(elem === searchValue){
          return index;
        }else{
          return NOT_FOUND
        }
      },
      NOT_FOUND
    )
  }
  indexOf(['a', 'b', 'c'], 1);
  // => 'b'

  // Doubling Array elements
  function double(inArr){
    return inArr.reduce(
      (outArr, elem) => {
        outArr.push(elem * 2);
        return outArr;
      },
      []);
  }
  double([1,2,3]);
  // => [2,4,6]
  ```
- By default, .sort() sorts string representation of the elements. These representations are compared via <. This operator compares lexicographically (the first characters are most significant).
  ```
  [200,3,10].sort((a,b) => a - b)
  // => [3, 10, 200]

  const arr = [{age:200}, {age:3}, {age:10}];
  arr.sort((obj1, obj2) => obj1.age - obj2.age), [{age: 3}, {age:10}, {age:200}];
  ```

- USE CASES FOR TYPED ARRAYS
  - The main uses cases for Typed Arrays, are:
    - Processing binary data: managing image data, manipulating binary files, binary networks protocols, etc.
    - INteracting with native APIs: Native APIs often receive and return data in binary format, which you could neither store nor manipulate well in pre-ES6 JavaScript. That meant that whenever you were communicating with such an API, data had to be converted from JavaScript to binary and back for every call. Typed Arrays eliminate this bottleneck. One example of communicating with native APIs is WebGL, for which Typed Arrays were initially created.
- **The core classes: ArrayBUffer, Typed Arrays, DataView**
- The Typed Array API stores binary data in instances of ArrayBuffer:
  ```
  const buf = new ArrayBuffer(4) // length in bytes
  ```
  An ArrayBuffer itself is a black box: If you want to access its data, you must wrap it in another object - a view object. Two kinds of view objects are available:
  > Typed Arrays: let you access the data as an indexed sequence of elements that all have the same type. Examples include:
    - Uint8Array: Elements are unsigned 8-bit integers. Unsigned means that their ranges start at zero.
    - Int16Array: Elements are signed 16-bit integers. Signed means that they have a sign and can be negative, zero, or positive.
    - Float32Array: Elements are 32-bit floating point numbers.
    - DataViews: Let you interpret the data as various types (Uint8, Int16, Float32, etc) that you can read and write at any byte offset.
- **Using Typed Arrays**
  Typed Arrays are used much like normal Arrays with a few notable differences:
  - Typed Arrays store their data in ArrayBuffers.
  - All elements are initialized with zeros.
  - All elements have the same type. Writing values to a Typed Array coerces them to that type. Reading values produces normal numbers or bigints.
  - The length of a Typed Array is inmutable; it can't changed.
  - Typed Arrays can't have holes.
- **Creating Typed Arrays**
  The following code shows three different ways of creating the same Typed Array:
  ```
  // Argument: Typed Array or Array-like object
  const ta1 = new Uint8Array([0, 1, 2]);
  
  const ta2 = Uint8Array.of(0, 1, 2);

  const ta3 = new Uint8Array(3); // length of Typed Array
  ta3[0] = 0;
  ta3[1] = 1;
  ta3[2] = 2;
  ```
- **The wrapped ArrayBuffer**
  ```
  const typedArray = new Int16Array(2); // 2 elements
  typedArray.buffer // 4 bytes
  ```
- **Getting and setting elements**
  ```
  const typedArray = new Int16Array(2);

  // getting value
  typedArray[1] // 0

  // setting a value
  typedArray[1] = 72
  ```
- **Using DataViews**
  This is how DataViews are used:
  ```
  const dataView = new DataView(new ArrayBuffer(4));
  dataView.getInt16(0) // 0
  dataView.getUint8(0) // 0
  dataView.setUint8(0, 5);
  ```
- Element types
  |Element     | TypedArray       | Bytes   | Description             |      |
  |:-----------|:-----------------|:--------|:------------------------|:-----|
  | Int8       | Int8Array        |    1    | 8-bit signed integer    | ES6  |
  | Uint8      | Uint8Array       |    1    | 8-bit unsigned integer  | ES6  |
  | Uint8C     | Uint8ClampedArray|    1    | 8-bit unsigned integer  | ES6  |
  |            |                  |         | (clamped conversion)    | ES6  |
  | Int16      | Int16Array       |    2    | 16-bit signed integer   | ES6  |
  | Uint16     | Uint16Array      |    2    | 16-bit unsigned integer | ES6  |
  | Int32      | Int32Array       |    4    | 32-bit signed integer   | ES6  |
  | Uint32     | Uint32Array      |    4    | 32-bit unsigned integer | ES6  |
  | BigInt64   | BigInt64Array    |    8    | 64-bit signed integer   | ES2020|
  | BigUint64  | BigUint64Array   |    8    | 64-bit unsigned integer | ES2020|
  | Float32    | Float32Array     |    4    | 32-bit floating point   | ES6   |
  | Float64    | Float64Array     |    8    | 64-bit floating point   | ES6   |

These types show up in two locations:
  - In Types Arrays, they specify the types of the elements. For example, all elements of a Int32Array have the type Int32. The element type is the only aspect of Typed Arrays that differs.
  - In DataViews, they are the lenses through which they access their ArrayBuffers when you use methods such as .getInt32() and .setInt32().
- The element type Uint8C is special: it is not supported by DataView and only exists to enable Uint8ClampedArray. This Typed Array is used by the canvas element (where it replaces CanvasPixelArray) and should otherwise be avoided. The only difference between Uint8C and Uint8 is how overflow and underflow are handled.
- TypedArrays and Array Buffers use numbers and bigints to import and export values:
  - The types BigInt64 and BigUint64 are handled via bigints. For example, setters accept bigints and getters return bigints.
  - All other element types are handled via numbers.

- **Handling overflow and underflow**
  - The highest value plus one is converted to the lowest value (0 for unsigned integers).
  - The lowest value minus one is converted to the highest value.
  ```
  function setAndGet(typedArray, value){
    typedArray[0] = value;
    return typedArray[0];
  }

  /* MODULO CONVERSION FOR UNSIGNED 8-bit integers*/
  const uint8 = new Uint8Array(1);
  
  //Highest value of range
  setAndGet(uint8, 255) // => 255

  // Overflow
  setAndGet(uint8, 256) // => 0

  // Lowest value of range
  setAndGet(uint8, 0)  // => 0

  // Underflow
  setAndGet(uint8, -1)  // => 255


  /* MODULO CONVERSION FOR SIGNED 8-bit integers  */
  const int8 = new Int8Array(1);

  // Highest value of range
  setAndGet(int8, 127)  // 127

  //Overflow
  setAndGet(int8, 128); // -128

  // Lowest value of range
  setAndGet(int8, -128) // -128

  // Underflow
  setAndGet(int8, -129) // 127
  ```
  - Clamped conversion is different
    - All underflowing values are converted to the lowest value.
    - All overflowing values are converted to the highest value.
    ```
    const uint8c = new Uint8ClampedArray(1);

    // Highest value of range
    setAndGet(uint8c, 255)  // 255

    // Overflow
    setAndGet(uint8c, 256)  // 255

    // Lowest value of range
    setAndGet(uint8c, 0)    // 0

    // Underflow
    setAndGet(uint8c, -1)   // 0
    ```
    
- **35 Sets (Set)**
- Before ES6, JS didn't have a data structure for sets. Instead, two workarounds were used:
  - The keys of an object were used as a set of strings.
  - Arrays were used as sets of arbitrary values. The downside is that checking membership (if an Array contains a value) is slower.
- Since ES6, JavaScript has the data structure Set, which can contain arbitrary values and performs membership checks quickly.

- Synchronous generators are special versions of function definitions and method definitions that always return synchronous iterables.

