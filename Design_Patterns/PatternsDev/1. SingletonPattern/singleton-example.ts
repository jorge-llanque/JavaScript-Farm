/**
 * The Singleton class defines the `getInstance` method that lest clients access
 * the unique singleton instance.
 */
class Singleton {
  private static instance: Singleton;

  private constructor() { }

  /**
   * The static method that controls the access to the singleton instance.
   * 
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someBusinessLogic() {
    // ...
  }
}

function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.')
  } else {
    console.log('Singleton failed, variables contain different instances.');
  }
}

clientCode();
// Singleton works, both variables contain the same instance.