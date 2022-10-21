/**
 * MEDIATOR MIDDLEWARE PATTERN
 * Use a central mediator object to handle communication between components.
 */

/**
 * A good use case for the mediator pattern is a chatroom! The users within the chatroom won't talk to 
 * each other directly. Instead, the chatroom serves as the mediator between the users.
 */

class ChatRoom{
  logMessage(user, message){
    const time = new Date();
    const sender = user.getName();

    console.log(`${time} [${sender}]: ${message}`);
  }
}

class User {
  constructor(name, chatroom){
    this.name = name;
    this.chatroom = chatroom;
  }

  getName(){
    return this.name;
  }

  send(message){
    this.chatroom.logMessage(this, message);
  }
}

const chatroom = new ChatRoom();
const user1 = new User('John', chatroom);
const user2 = new User('Mary', chatroom);

user1.send('Hello there!');
user2.send('Hi, John!');