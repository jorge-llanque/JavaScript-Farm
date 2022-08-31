## Design Patterns
**Constructors with Prototypes**

Functions in JavaScript have a property called a prototype. When we call a JavaScript constructor to create an object, all the properties of the constructor's prototype are then made available to the new object. In this fashion, multiple Car Object can be created that access the same prototype.
```javascript
function Car(model, year, miles){
  this.model = model;
  this.year = year;
  this.miles = miles;
}
Car.prototype.toString = function(){
  return this.model + " has done" + this.miles + " miles";
};

var civic = new Car("Honda Civic, 2009, 200000);
console.log(civic.toString())

```

**The Module Pattern**

**The Revealing Module Pattern**

**The Singleton Pattern**

**The Observer Pattern**

**The Mediator Pattern**

**The Prototype Pattern**

**The Command Pattern**

**The Facade Pattern**

**The Factory Pattern**

**The Mixin Pattern**

**Subclassing**

**Mixins**

**The Decorator Pattern**

**Pseudoclassical Decorators**

**Decorators With JQuery**

**Flyweight**

**The Flyweight Pattern and the DOM**