  - **Some Promises are never settled**
    - It is possible that a Promise is never settled.
        ```
        new Promise(() => {})
        ```
    - Promise.resolve(): create a Promise fullfilled with a given value
    ```
    Promise.resolve(123).then(x => {
        console.log(x) // => 123
    })
    ```
    - Promise.reject(): create a Promise rejected with a given value
  ```
  const myError = new Error('My error');
  Promise.reject(myError)
    .catch(err => {
        console.log(err)
    })
  ```

- Returning and throwing in .then() callbacks
  > .then() handles Promise fulfillments. It also returns a fresh Promise. How that Promise is settled depends on what happens inside the callback. Let's look at three common cases.
  - Returning a non-Promise value
    ```
    Promise.resolve('abc')
        .then(str => {
            return str  // => 'abc'
        })
    ```
- Returning a Promise
  ```
  Promise.resolve('abc')
    .then(str => {
        return Promise.resolve(123)
    })
    .then(num => {
        return num // => 123
    })
  ```
- Throwing an exception
  ```
  const myError = new Error('My error');
  Promise.resolve('abc')
    .then(str => {
        throw myError;
    })
    .catch(err => {
        err
    })
  ```

- The difference between .then() and .catch() is that the latter is triggered by rejections, not fulfillments. However, both methods turn the actions of their callbacks into Promises in the same manner.

- Chaining method calls
  ```
  function myAsyncFunc(){
      return asyncFunc1()
        .then(result1 => {
            // ...
            return asyncFunc2(); // a Promise
        })
        .then(result2 => {
            // ...
            return result2 ?? '(Empty)'; // not a Promise
        })
        .then(result3 => {
            // ...
            return asyncFunc4(); // a Promise
        })
  }
  ```
  - Use case for .finally(): cleaning up
  - One common use case for .finally() is similar to a common use case of the synchronous finally clause: cleaning up after you are done with a resource. That should always happen, regardless of whether everything went smoothly or there was an error
  ```
  let connection;
  db.open()
    .then((conn) => {
        connection = conn;
        return connection.select({name: 'Jane'});
    })
    .then((result) => {
        // Process result
        // Use `connection` to make more queries
    })
    //...
    .catch((error) => {
        // handle errors
    })
    .finally(() => {
        connection.close();
    });
  ```
  40.3