/**
 * SINGLETON PATTERN
 * Share a single global instance throughout our application
 * - The common use case for a Singleton is to have some sort of global state
 *   sort throughout your application.
 * - In React, we often rely on a global state through state management tools such as 
 *   Redux or React Context instead of using Singletons.
 */

let counter = 0;
let instance;

class Counter {

  constructor(){
    if(instance){
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }

  /**
   * Method to get the current counter value
   * @returns The value of the instance
   */
  getInstance(){
    return this;
  }

  /**
   * Method to get the current counter value
   * @returns The current value of the counter
   */
  getCount(){
    return counter;
  }

  /**
   * Method that increments the value of counter by one.
   */
  increment(){
    return ++counter;
  }

  /**
   * Method that decrements the value of counter by one.
   */
  decrement(){
    return --counter;
  }
}

const singletonCounter = Object.freeze(new Counter());

export default singletonCounter;
