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
Modules are an integral piece of any robust application's architecture and typically help in keeping the units of code for a project both cleanly separated and organized.
```javascript
var basketModule = (function(){
  //privates
  var basket = [];
  function doSomethingPrivate(){
    //...
  }
  function doSomethingElsePrivate(){
    //...
  }

  // Return an object exposed to the public
  return {
    // Add items to our basket
    addItem: function(values){
      basket.push(values);
    },
    // Get the count of items in the basket
    getItemCount: function(){
      return basket.length;
    },
    // Public alias to a private function
    doSomething: doSomethingPrivate,
    // Get the total value of items in the basket
    getTotal: function(){
      var itemCound = this.getItemCount(), total = 0;
      while (itemCount--){
        total += basket[itemCount].price;
      }
      return total;
    }
  };
}())
```

**The Revealing Module Pattern**
- Advantages
This pattern allows the syntax of our scripts to be more consistent. It also makes it easier to tell at the end of the module which of our functions and variables may be accessed publicly, which eases readability.
- Disadvantages
A disadvantage of this pattern is that if a private function refers to a public function, that public function can't be overridden if a patch is necessary. This is because the private function will continue to refer to the private implementation, and the pattern doesn't apply to public members, only to functions.
```javascript
var myRevealingModule = function(){
  
  var privateVar = "Ben Cherry",
       publicVar = "Hey there!";
  
  function privateFunction(){
    console.log("Name:" + privateVar);
  }
  function publicSetName(strName){
    privateVar = strName;
  }
  function publicGetName(){
    privateFunction();
  }

  // Reveal public pointers to private functions and properties
  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  }
}();
```

**The Singleton Pattern**
```javascript
var mySingleton = (function(){
  // Instance stores a reference to the Singleton
  var instance;
  function init(){
    // Singleton
    // Private methods and variables
    function privateMethod(){
      console.log("I am private");
    }
    var privateVariable = "Im also private";
    var privateRandomNumber = Math.random();
    
    return {
      // Public methods and variables
      publicMethod: function(){
        console.log("The public can see me!");
      },
      publicProperty: "I am also public",
      getRandomNumber: function(){
        return privateRandomNumber;
      }
    };
  };

  return {
    // Get the Singleton instance if one exists or create one if it doesn't
    getInstance: function(){
      if(!instance){
        instance = init();
      }
      return instance;
    }
  };
})();

var myBadSingleton = (function(){
  // Instance stores a reference to the Singleton
  var instance;
  function init(){
    // Singleton
    var privateRandomNumber = Math.random();
    return {
      getRandomNumber: function(){
        return privateRandomNumber;
      }
    };
  };

  return {
    // Always create a new Singleton instance
    getInstance: function(){
      instance = init();
      return instance;
    }
  };
})();

// Usage:
var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log(singleA.getRandomNumber() === singleB.getRandomNumber()) // true
```

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