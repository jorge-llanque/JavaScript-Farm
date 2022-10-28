/**
 * COMMAND PATTERN
 * Decouple methods that execute tasks by sending commands to a commander.
 * - With the Command Pattern, we can decouple objects that execute a certain task from
 *   the object that calls the method.
 */

class OrderManager{
  constructor(){
    this.orders = [];
  }

  placeOrder(order, id){
    this.orders.push(id)
    return `You have successfully ordered ${order} (${id})`;
  }

  trackOrder(id) {
    return `Your order ${id} will arrive in 20 minutes.`
  }

  cancelOrder(id){
    this.orders = this.orders.filter(order => order.id !== id)
    return `You have canceled your order ${id}`;
  }
}

const manager = new OrderManager();

manager.placeOrder("Pad Thai", "1234");
manager.trackOrder("1234");
manager.cancelOrder("1234");


// Let's refactor the OrderManager
class OrderManager {
  constructor(){
    this.orders = [];
  }

  execute(command, ...args){
    return command.execute(this.orders, ...args);
  }
}


// We need to create three Commands for the Order Manager:
class Command{
  constructor(execute){
    this.execute = execute;
  }
}

function PlaceOrderCommand(order, id){
  return new Command(orders => {
    orders.push(id);
    return `You have successfully ordered ${order} (${id})`;
  });
}

function CancelOrderCommand(id){
  return new Command(orders => {
    orders = orders.filter(order => order.id !== id);
    return `You have canceled your order ${id}`;
  });
}

function TrackOrderCommand(id){
  return new Command(() => `Your order ${id} will arrive in 20 minutes.`);
}

// Pros
// - Allows us to decouple methods from the object that executes the operation. It gives you more control
//   if you're dealing with commands that have a certain lifespan, or commands that should be queued and
//   executed at specific times.

// Cons
// - The use cases for the command pattern are quite limited, and often adds unnecessary boilerplate ot an application.