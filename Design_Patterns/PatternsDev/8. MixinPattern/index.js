/**
 * MIXIN PATTERN
 * Add functionality to objects or classes without inheritance.
 * - A mixin is an object that we can use in order to add reusable functionality to another object or class,
 *   without using inheritance.
 * - Mixins were often used to add functionality to React components before the introduction of ES6 classes.
 * - The React team discourages the use of mixins as it easily adds unnecessary complexity to a component, making
 *   it hard to maintain and reuse. The React team encouraged the use of higher order components instead, which
 *   can now often replaced by Hooks.
 */


class Dog{
  constructor(name){
    this.name = name;
  }
}

// Let's create an animalFunctionality mixin that adds the walk and sleep properties.
const animalFunctionality = {
  walk: () => console.log("Walking!!!"),
  sleep: () => console.log("Sleeping")
};

// Mixin
const dogFunctionality = {
  bark: () => console.log("wooff"),
  wagTail: () => console.log("Wagging my tail!"),
  play: () => console.log("Playing!"),
  walk(){
    super.walk();
  },
  sleep(){
    super.sleep();
  }
};

// Let's add dogFunctionality mixin to the Dog's prototype
Object.assign(dogFunctionality, animalFunctionality);
Object.assign(Dog.prototype, dogFunctionality);


const pet1 = new Dog("Daisy");

console.log(pet1.name);
pet1.bark();
pet1.play();
pet1.walk();
pet1.sleep();