/**
 * FACTORY PATTERN
 * Use a factory function in order to create objects.
 * - With the factory pattern we can use factory functions in order to create new objects. A function
 *   is a factory function when it returns a new object without the use of the new keyword.
 */

const createUser = ({firstname, lastname, email}) => ({
  firstname,
  lastname,
  email,
  fullname(){
    return `${this.firstname} ${this.lastname}`;
  }
})

const user1 = createUser({firstname: 'John', lastname: 'Doe', email: 'test@test.com'})
const user2 = createUser({firstname: 'John-2', lastname: 'Doe-2', email: 'test-2@test.com'})

/**
 * The factory pattern can be useful if we're creating relatively complex and configurable objects.
 * It could happen that the values of the keys and values are dependent on a certain environment or
 * configuration. With the factory pattern, we can easily create new objects that contain the custom
 * keys and values!
 */
const createObjectFromArray = ([key, value]) => ({
  [key]: value
});

createObjectFromArray(["name", "John"]);