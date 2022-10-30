/***
 * The singleton pattern by Samier Saeed
 */
const _data = [];

const UserStore = {
  add: item => _data.push(item),
  get: id => _data.find(d => d.id === id)
}

Object.freeze(UserStore);
//export default UserStore;

//////////////////////////////////////////////////////////////
// Same implementation as above but using ES6 classes
class UserStore2 {
  constructor(){
    this._data = [];
  }

  add(item){
    this._data.push(item);
  }
  get(id){
    return this._data.find(d => d.id === id);
  }
}

const instance = new UserStore2();
Object.freeze(instance);
//export default instance;

//////////////////////////////////////////////////////////////
// Same implementation as above but more closely resembling the Singleton pattern
class UserStore3 {
  constructor(){
    if(!UserStore3.instance){
      this._data = [];
      UserStore3.instance = this;
    }
    return UserStore3.instance;
  }

  // rest is the same code as above
}

const instance2 = new UserStore3();
Object.freeze(instance2);
//export default instance2;
