/**
 * PROXY PATTERN
 * Intercepts and controls interactions to target objects.
 * - A proxy can be useful to add validation.
 * - A proxy made sure that we weren't modifying the original object, which helps us keep our data pure!.
 * - We can access or modify properties on the targe object through Reflect.get() and Reflect.set().
 * - Proxies are a powerful way to add control over the behavior of an object. A proxy can have various use-cases:
 *   it can help with validation, formatting, notifications, or debugging.
 * - Overusing the Proxy object or performing heavy operations on each handler method invocation can easily
 *   affect the performance of your application negatively.
 */

const person = {
  name: 'John Doe',
  age: 42,
  nationality: 'American'
};

/**
 * Handler object that will intercept and control interactions to the target object.
 */
const personProxy = new Proxy(person, {
  // Intercept the get operation
  get: (obj, prop) => {
    if(!obj[prop]){
      console.log('Hmm.. this property doesn not seem to exist on the target object.');
    }else{
      console.log(`The value of ${prop} is ${obj[prop]}`);
    }
  },

  // Intercept the set operation
  set: (obj, prop, value) => {
    if(prop == "age" && typeof value !== "number"){
      console.log('Sorry, you can only pass numeric values for age.');
    } else if(prop == "name" && value.length < 2){
      console.log('You need to provide a valid name.');
    }else{
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
      Reflect.set(obj, prop, value);
    }
  }
});

personProxy.name;
personProxy.age = 33;