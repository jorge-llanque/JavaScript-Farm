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
- Promise.race()
  - Promise.race() returns a Promise which is settled as soon as the first Promise among promises is settled
  ```javascript
  const promises = [
    new Promise((resolve, reject) =>
      setTimeout(()=> resolve('result'), 100)),
    new Promise((resolve, reject) =>
      setTimeout(()=> reject('ERROR'), 200));
  ];

  Promise.race(promises)
    .then((result) => assert.equal(
      result, 'result'));
  ```
- Promise.any()
  - Promise.any() returns a Promise **p**. How it is settled, depends on the parameter promises (which refers to an iterable over Promises):
    - If and when the first Promise is fulfilled, **p** is resolved with that Promise.
    - If all Promises are rejected, **p** is rejected with an instance of **AggregateError** that contains all rejection values.
  ```javascript
  const promises = [
    Promise.reject('ERROR A'),
    Promise.reject('ERROR B'),
    Promise.resolve('result'),
  ];

  Promise.any(promises)
    .then((result) => assert.equal(
      result, 'result'
    ));
  ```

- Promise.any() vs Promise.all()
  - There are two ways in which Promise.any() and Promise.all() can be compared:
    - They are inverses of each other:
      - Promise.all(): First input rejection rejects the result Promise or its fulfillment value is an Array with input fulfillment values.
      - Promise.any(): First input fulfillment fulfills the result Promise or its rejection value is an Array with input rejection values (inside an error object).
    - They have different focuses:
      - Promise.all() is interested in all fulfillments. The opposite case (at least one rejection) leads to a  rejection.
      - Promise.any() is interested in the first fulfillment. The opposite case (only rejections) leads to a rejection.
- Promise.any() vs Promise.race()
  - Promise.any() and Promise.race() are also related, but interested in different things:
    - Promise.race() is interested in settlements. The Promise which is settled first, "wins". In other words: We want to know about the asynchronous computation that terminates first.
    - Promise.any() is interested in fulfillments. The Promise which is fulfilled first, "wins". In other words: We want to know about the asynchronous computation that succeeds first.
  - The main-relatively-use case for .race() is timing out Promises. The use cases for .any() are broader.

- Use case for Promise.any()
  ```javascript
    const resource = await Promise.any([
      fetch('http://example.com/first.txt')
        .then(response => response.text()),
      fetch('http://example.com/second.txt')
        .then(response => response.text()),
    ]);
  ```
- Promise.allSettled()
  - Returns a Promise out. Once all promises are settled, out is fulfilled with an Array. Each element **e** of that Array corresponds to one Promise **p** of promises:
    ```javascript
    const urls = [
      'http://example.com/exists.txt',
      'http://example.com/missing.txt'
    ];
    const result = Promise.allSettled(
      urls.map(u => downloadText(u)));
    result.then(
      arr => assert.deepEqual(
        arr,
        [
          {
            status: 'fulfilled',
            value: 'Hello!',
          },
          {
            status: 'rejected',
            reason: new Error('Not Found'),
          },
        ]
      )
    );
    ```
- Short-circuiting
  - For a Promise combinator, shor-circuiting means that the output Promise is settled early - before all input Promises are settled. The following combinators show-circuit:
    - Promise.all(): The output Promise is rejected as soon as one input Promise is rejected.
    - Promise.race(): The output Promise is settled as soon as one input Promise is settled.
    - Promise.any(): The output Promise is fulfilled as soon as one input Promise is fulfilled.

- TIPS PROMISES
  - Chaining mistake: losing the tail
    - Computation starts with the Promise returned by asyncFunc(). But afterward, computation continues and another Promise is created via .then(). foo() returns the former Promise, but should return the latter.
  ```javascript
    // Don't do this
    function foo(){
      const promise = asyncFunc();
      promise.then(result => {
        //...
      });
      return promise;
    }

    // How to fix it
    function foo(){
      const promise = asyncFunc();
      return promise.then(result => {
        //...
      });
    }
  ```
  - Chaining mistake: nesting
  ```javascript
    // Don't do this
    asyncFunc1()
      .then(result1 => {
        return asyncFunc2()
          .then(result2 => {
            //...
          })
      })
    
    // How to fix it
    asyncFunc1()
      .then(result1 => {
        return asyncFunc2();
      })
      .then(result2 => {
        //...
      });
  ```
  - Chaining mistake: more nesting than necessary
  ```javascript
    // Don't do this
    asyncFunc1()
      .then(result1 => {
        if(result1 < 0){
          return asyncFuncA()
            .then(resultA => 'Result: ' + resultA);
        }else{
          return asyncFuncB()
            .then(resultB => 'Result: ' + resultB);
        }
      });
    
    // How to fix it
    asyncFunc1()
      .then(result1 => {
        return result1 < 0 ? asyncFuncA() : asyncFuncB();
      })
      .then(resultAB => {
        return 'Result: ' + resultAB;
      });
  ```

  - Chaining mistake: creating Promises instead of chaining
  ```javascript
  // Don't do this
  class Model {
    insertInto(db) {
      return new Promise((resolve, reject) => {
        db.insert(this.fields)
          .then(resultCode => {
            this.notifyObservers({event: 'created', model: this});
            resolve(resultCode);
          }).catch(err => {
            reject(err);
          })
      });
    }
  }

  // How to fix it
  class Model {
    insertInto(db) {
      return db.insert(this.fields)
        .then(resultCode => {
          this.notifyObservers({event: 'created', model: this});
          return resultCode;
        })
    }
  }
  ```

- **ASYNC FUNCTIONS: THE BASICS**
  ```javascript
    async function fetchJsonAsync(url){
      try{
        const request = await fetch(url);   // async
        const text = await request.text();  // async
        return JSON.parse(text);            // sync
      }catch(error){
        assert.fail(error);
      }
    }
    /*The previous is equivalent to the following code*/
    function fetchJsonPromises(url){
      return fetch(url)                     // async
        .then(request => request.text())    // async
        .then(text => JSON.parse(text))     // sync
        .catch(error => {
          assert.fail(error);
        })
    }
  ```

  - Each async function always returns a Promise
  - if we don't explicitly return anything, undefined is returned for us

```javascript
// the following code can't be executed
async function downloadContent(urls){
  return urls.map((url) => {
    return await httpGet(url);  // SyntaxError!
  });
}
// The reason is that normal arrow functions don't allow await inside their bodies.
// Ok, let's try an async arrow function then:
async function downloadContent(urls){
  return urls.map(async(url) => {
    return await httpGet(url);
  });
}

//Alas, this doesn't work either: Now .map() returns an Array with Promises, not an Array with values.
// One possible solution is to use Promise.all() to unwrap all Promises
async function downloadContent(urls){
  const promiseArray = urls.map(async (url) => {
    return await httpGet(url);
  });
  return await Promise.all(promiseArray);
}
 // It fixed it. We are unwrapping a Promise via await, only to re-wrap it immediately via return. If we omit await, we don't even need an async arrow function:
async function downloadContent(urls){
  const promiseArray = urls.map(
    url => httpGet(url));
  return await Promise.all(promiseArray);
}
// For the same reason, we can also omit await
```
  
- Concurrency and await
  ```javascript
  function delay(ms){
    return new Promise((resolve, _reject) => {
      setTimeout(resolve, ms);
    });
  }
  async function paused(id){
    console.log('start' + id);
    await delay(10); // paused
    console.log('END' + id);
    return id;
  }
  ```
  - await: running asynchronous functions sequentially
  ```javascript
  async function sequentialAwait(){
    const result1 = await paused('first');
    assert.equal(result1, 'first');

    const result2 = await paused('second');
    assert.equal(result2, 'second');
  }

  // await: running asynchronous functions concurrently
  async function concurrentPromiseAll(){
    const result = await Promise.all([
      paused('first'), paused('second')
    ]);
    assert.deepEqual(result, ['first', 'second']);
  }
  ```
  - We don't need await if we "fire and forget"
    - Await is not required when working with a Promise-based function; we only need it if we want to pause and wait until the returned Promise is settled. If we only want to start an asynchronous operation, then we don't need it:
    ```javascript
    async function asyncFun(){
      const writer = openFile('someFile.txt');
      writer.write('hello');  // don't wait
      writer.write('world');  // don't wait
      await writer.close();   // wait for file to close
    }
    // In this code, we don't await .write() because we don't care when it is finished. We do, however, want to wait until .close() is done.
    ```

  - It can make sense to await and ignore the result
    - It can occasionally make sense to use await, even if we ignore its result
      ```javascript
      await longRunningAsyncOperation();
      console.log('Done!');

      // Here, we are using await to join a long-running asynchronous operation. That ensures that the logging really happens after that operation is done.
      ```

## Protocol: async iteration
  SYNCHRONOUS ITERATION
  - An **Iterable** is a data structure whose contents can be accessed via iteration. It is a factory for iterators.
  - An **Iterator** is a factory for iteration results that we retrieve by calling the method .next().
  - Each **IterationResult** contains the iterated .value and a boolean .done that is true after the last element and false before.
  
ASYNCHRONOUS ITERATION
  - The .value could contain a `Promise<T>`
  - .next() could return `Promise<IteratorResult<T>>`

USING ASYNC ITERATION DIRECTLY
```javascript
const asyncIterable = syncToAsyncIterable(['a','b']);
const asyncIterator = asyncIterable[Symbol.asyncIterator]();

// Call .next() until .done is true:
asyncIterator.next()
  .then(iteratorResult => {
    assert.deepEqual(
      iteratorResult,
      {value: 'a', done: false});
      return asyncIterator.next();
  })
  .then(iteratorResult => {
    assert.deepEqual(
      iteratorResult,
      {value: 'b', done: false});
      return asyncIterator.next();
  })
  .then(iteratorResult => {
    assert.deepEqual(
      iteratorResult,
      {value: undefined, done: true});
  });
```
