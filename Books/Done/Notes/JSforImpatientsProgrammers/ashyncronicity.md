  - **Some Promises are never settled**
    - It is possible that a Promise is never settled.
        ```javascript
        new Promise(() => {})
        ```
    - Promise.resolve(): create a Promise fullfilled with a given value
    ```javascript
    Promise.resolve(123).then(x => {
        console.log(x) // => 123
    })
    ```
    - Promise.reject(): create a Promise rejected with a given value
  ```javascript
  const myError = new Error('My error');
  Promise.reject(myError)
    .catch(err => {
        console.log(err)
    })
  ```

- Returning and throwing in .then() callbacks
  > .then() handles Promise fulfillments. It also returns a fresh Promise. How that Promise is settled depends on what happens inside the callback. Let's look at three common cases.
  - Returning a non-Promise value
    ```javascript
    Promise.resolve('abc')
        .then(str => {
            return str  // => 'abc'
        })
    ```
- Returning a Promise
  ```javascript
  Promise.resolve('abc')
    .then(str => {
        return Promise.resolve(123)
    })
    .then(num => {
        return num // => 123
    })
  ```
- Throwing an exception
  ```javascript
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
  ```javascript
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
  ```javascript
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
- Error Handling: don't mix rejections and exceptions
  ```javascript
  // don't do this
  function asyncFunc(){
    doSomethingSync();
    return doSomethingASync()
      .then(result => {
        //...
      })
  }

  // Solution 1
  function asyncFunc(){
    try{
      doSomethingSync();
      return doSomethingAsync()
        .then(result => {
          //...
        })
    }catch(err){
      return Promise.reject(err);
    }
  }

  // Solution 2
  function asyncFunc(){
    return Promise.resolve()
      .then(() => {
        doSomethingSync();
        return doSomethingAsync();
      })
      .then(result => {
        //...
      })
  }

  // Solution 3
  function asyncFunc(){
    return new Promise((resolve, reject) => {
      doSomethingSync();
      resolve(doSomethingAsync());
    })
    .then(result => {
      //...
    });
  }
  ```
  
- Promise-based functions start synchronously, settle asynchronously
```javascript
function asyncFunc(){
  console.log('asyncFunc');
  return new Promise((resolve, _reject) => {
    console.log('new Promise()');
    resolve();
  });
}
console.log('START');
asyncFunc()
  .then(() => {
    console.log('.then()');
  });
console.log('END');
// Output:
// 'START'
// 'asyncFunc'
// 'new Promise()'
// 'END'
// '.then()'
```

- Promise.all()
```javascript
const promises = [
  Promise.resolve('result a'),
  Promise.resolve('result b'),
  Promise.resolve('result c'),
];
Promise.all(promises)
  .then((arr) => assert.deepEqual(
    arr, ['result a', 'result b', 'result c']
  ));
```
  - What happens if the callback of .map() is a Promise-based function (a function that maps normal values to Promises)? Then the result of .map() is an Array of Promises. Alas, that is not data that normal code can work with. Thankfully, we can fix that via Promise.all(): It converts an Array of Promises into a Promise that is fulfilled with an Array of normal values.
  ```javascript
  function timesTwoAsync(x){
    return new Promise(resolve => resolve(x*2));
  }

  const arr = [1,2,3];
  const promiseArr = arr.map(timesTwoAsync);
  Promise.all(promiseArr)
    .then(result => {
      assert.deepEqual(result, [2,4,6]);
    });

  // We'll use .map() and Promise.all() to download text files from the web.
  function downloadText(url){
    return fetch(url)
      .then(response => {
        if(!response.ok){
          throw new Error(response.statusText);
        }
        return response.text();
      })
  }
  const urls = [
    'http://example.com/first.txt',
    'http://example.com/second.txt'
  ];
  const promises = urls.map(url => downloadText(url));

  Promise.all(promises)
    .then(
      (arr) => assert.deepEqual(
        arr, ['First!', 'Second!']
      )
    );
  ```
  40.5.3