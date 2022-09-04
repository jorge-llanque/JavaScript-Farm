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
The Observer is a design pattern in which an object maintains a list of objects depending
on it (observers), automatically notifying them of any changes to state.
When a subject needs to notify observers about something interesting happening, it broadcasts a
notification to the observers (which can include specific data related to the topic of the notification).
- definition: One or more observers are interested in the state of a subject and register their interest with the subject by attaching themselves. When something changes in our subject that the observer may be interested in, a notify message is sent which calls the update method in each observer. When the observer is no longer interested in the subject's state, they can simply detach themselves.
  - Subject: Maintains a list of observers, facilitates adding or removing observers.
  - Observer: Provides an update interface for objects that need to be notified of a Subject's changes of state.
  - ConcreteSubject: Broadcasts notifications to Observers on changes of state, stores the state of ConcreteObserver.
  - ConcreteObserver: Stores a reference to the ConcreteSubject, implements an update interface for the Observer to ensure state is consistent with the Subject's.

```javascript
function ObserverList(){
  this.observerList = [];
}

ObserverList.prototype.Add = function(obj){
  return this.observerList.push(obj);
}
ObserverList.prototype.Empty = function(){
  this.observerList - [];
}
ObserverList.prototype.Count = function(){
  return this.observerList.length;
}
ObserverList.prototype.Get = function(index){
  if(index > -1 && index < this.observerList.length){
    return this.observerList[index];
  }
}
ObserverList.prototype.Insert = function(obj, index){
  var pointer = -1;
  if(index === 0){
    this.observerList.unshift(obj);
    pointer = index;
  }else if(index === this.observerList.length){
    this.observerList.push(obj);
    pointer = index;
  }
  return pointer;
}
ObserverList.prototype.IndexOf = function(obj, startIndex){
  var i = startIndex, pointer = -1;
  while(i < this.observerList.length){
    if(this.observerList[i] === obj){
      pointer = i;
    }
    i++;
  }

  while(i < this.observerList.length){
    if(this.observerList[i] === obj){
      pointer = i;
    }
    i++;
  }
  return pointer;
};
ObserverList.prototype.RemoveIndexAt() = function(index){
  if(index === 0){
    this.observerList.shift();
  }else if(index === this.observerList.length -1){
    this.observerList.pop();
  }
};
// Extend an object with an extension
function extend(extension, obj){
  for(var key in extension){
    obj[key] = extension[key];
  }
}
// Next, let's model the Subject and the ability to add, remove, or notify observers on the observer list.
function Subect(){
  this.observers = new ObserverList();
}
Subject.prototype.AddObserver = function(observer){
  this.observers.Add(observer);
};
Subject.prototype.RemoveObserver = function(observer){
  this.observer.RemoveAt(this.observers.IndexOf(observer, 0));
};
Subject.prototype.Notify = function(context){
  var observerCount = this.observers.Count();
  for(var i=0; i < observerCount; i++){
    this.observers.Get(i).Update(context);
  }
};

// We then define a skeleton for creating new Observers. The Update functionality here will be overwritten later with custom behavior
function Observer(){
  this.Update = function(){
    // ...
  };
}
```

The Publish/Subscribe pattern uses a topic/event channel that sits between the objects wishing to receive notifications (subscribers) and the object firing the event (the publisher). This event system allows code to define application specific events that can pass custom arguments containing values needed by the subscriber. The idea here is to avoid dependencies between the subscriber and publisher.
Here is an example of how one might use the Publish/Subscribe pattern if provided with a functional implementation powering publish(), subscribe(), and unsubscribe() behind the scenes:
```javascript
// A very simple new mail handler
// A count of the number of messages received
var mailCounter = 0;

// Initialize subscribers that will listen out for a topic with the name "inbox/newMessage".
var subscriber1 = subscribe("inbox/newMessage", function(topic, data){
  // Log the topic for debugging purposes
  console.log("A new message was received: ", topic );

  // Use the data that was passed from our subject
  // to display a message preview to the user
  $(".messageSender").html(data.sender);
  $(".messagePreview").html(data.body);
});
// Here's another subscriber using the same data to perform a different task.
// Update the counter displaying the number of new messages received via the publisher.
var subscriber2 = subscribe("inbox/newMessage", function(topic, data){
  $('.newMessageCounter').html(mailCounter++);
});
publish("inbox/newMessage",[{
  sender: "hello@google.com",
  body: "Hey there! How are you doing today?"
}]);

// We could then at a later point unsubscribe our subscribers from receiving any new topic notifications
// as follows:
// unsubscribe(subscriber1, );
// unsubscribe(subscriber2);
```
The Observer and Publish/Subscribe patterns encourage us to think hard about the relationships
between different parts of our application. They also help us identify layers containing direct relationships
that could be replaced with sets of subjects and observers. This effectively could be used to break down an application into smaller, more loosely coupled blocks to improve code management and potential for reuse.


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