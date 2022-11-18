/**
 * The JavaScript Proxy API was an awesome improvement: a virtualizing interface to control the
 * modification behavior of an object.
 */

const proxy = new Proxy({}, {
  get: (obj, prop) => {/*...*/},
  set: (obj, prop, value) => {},
  // more props here
})

/**
 * The most obvious and useful usage of Proxy is validation; since you monitor validate
 * any property coming in, you can keep your data as pure as possible.
 */
const proxy1 = new Proxy({}, {
  set: (obj, prop, value) => {
    if (prop === "age" && value > 100) {
      value = 100;
    }
    obj[prop] = value;
  }
});

proxy.age = 120; // 100

/**
 * Another simple usage is formatting data that comes into the object.
 */
const proxy2 = new Proxy({}, {
  set: (obj, prop, value) => {
    if(prop === "age"){
      obj[prop] = Number(value);
    }
  }
})