/**
 * OBSERVER PATTERN
 * Use observables to notify subscribers when a event occurs.
 */

/**
 * An observable object usually contains 3 importants parts:
 * - observers: an array of observers that will get notified whenever a specific event occurs.
 * - subscribe(): a method in order to add observers to the observers list.
 * - unsubscribe(): a method in order to remove observers from the observers list.
 * - notify(): a method to notify all observers whenever a specific event occurs.
 */

/**
 * Although we can use the observer pattern in many ways, it can be very useful when working with asynchronous, event-based data.
 * Maybe you want certain components to get notified whenever certain data has finished downloading, or
 * whenever user sent new messages to a message board and all other members should get notified.
 */

/**
 * Using the observer pattern is a greta way to enforce separation of concerns and the single-responibility
 * principle. The observer objects aren't tightly coupled to the observable object, and can be (de)coupled at any time.
 * The observable object is responsible for monitoring the events, while the observers simply handle the received dtaa.
 * - If an observer becomes too complex, it may cause performance issues when notifying all subscribers.
 */

class Observable {
  constructor(){
    this.observers = [];
  }

  subscribe(func){
    this.observers.push(func);
  }

  unsubscribe(func){
    this.observers = this.observers.filter(observer => observer !== func);
  }

  notify(data){
    this.observers.forEach(observer => observer(data));
  }
}

// Observable
export function App(){

  function handleClick(){
    observable.notify('User clicked button!');
  }

  function handleToggle(){
    observable.notify('User toggled switch!');
  }
  return(
    <div className="App">
      <Button>Click me!</Button>
      <FormControlLabel control={<Switch/>}/>
    </div>
  )
}


function logger(data){
  console.log(`${Date.now()} ${data}`);
}

function toastify(data){
  toast(data);
}

observable.subscribe(logger);
observable.subscribe(toastify);