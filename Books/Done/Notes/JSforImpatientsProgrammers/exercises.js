/**
 * With for-of we can iterate over [index, element] pairs of array
 */
const arr = ['a', 'b', 'c'];
for (const [idx, elm] of arr.entries()) {
    console.log(idx, elm)
}

/**
 * Ordinary functions
 */

// Function declaration
function ordinary1(a,b,c){
    //...
}

// const plus anonymous function expression
const ordinary2 = function(a,b,c){
    //...
}

/**
 * Specialized functions
 */

// the purpose of an arrow function is to be a real function
const arrow = () => {
    return 123;
}

// The purpose of a method is to be a method
const obj = {
    myMethod(){
        return 'abc';
    }
}

// The purpose of a class is to be a constructor function
class MyClass {
    /****** */
}

/**
 * Explaining why to use <this> with arrow function
 * 
 * In this code, we can observe two ways of handling <this>
 * - Dynamic this: we try to access the this of .someMethod() from an ordinary function. There
 *   it is shadowed by the function-s own this, which is undefined. Given that ordinary functions
 *   receive their this via function or method calls, their this is called dynamic.
 * - Lexical this: We again try to access the this of .someMethod(). This time, we succeed because
 *   the arrow function does not have its own this. this is resolved lexically, just like any other
 *   variable. That's why the this of arrow functions is called lexical.
 */

const jill = {
    name: 'Jill',
    someMethod(){
        function ordinaryFunc(){
            assert.throws(
                () => this.name,
                //TypeError: Cannot read properties of undefined
            )
        }
        ordinaryFunc();

        const arrowFunc = () => {
            assert.equal(this.name, 'Jill');
        };
        arrowFunc();
    }
}
jill.someMethod();


/**
 * Methods of functions: call(), apply(), bind()
 */

// The function method call() makes the implicit <this> explicit
function func(x,y){
    return [this, x, y]
}
func.call('hi','everybody')

// The function method .apply() specify a value for the implicit parameter <this>
function func2(x,y){
    return [this, x, y]
}
func2.apply(1,2)

// The function method .bind()
// Using .bind() for real functions is somewhat unintuitive because we have to provide a value
// for <this>. Given that it is undefined during function calls, it is usually set to undefined or null.
// In the following example, we create a function that has a parameter, by binding the first paramter of 
// add() to 8.
function add(x,y){
    return x + y;
}
const add8 = add.bind(undefined, 8);