/***
 * PROTOTYPE PATTERN
 * Share properties among many objects of the same type.
 * - The Prototype Pattern is a useful way to share properties among many objects of the same type.
 */

class Dog{
  constructor(name){
    this.name = name;
  }

  bark(){
    return 'Wooff!';
  }
}

const dog1 = new Dog('Daisy');
const dog2 = new Dog('Max');
const dog3 = new Dog('Spot');

console.log(Dog.prototype);
console.log(dog1.__proto__);