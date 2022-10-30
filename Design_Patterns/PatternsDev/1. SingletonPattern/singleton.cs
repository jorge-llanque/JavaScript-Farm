/*
  Singleton en C#
  ----------------
  Es un patrón de diseño creacional que garantiza que tan solo exista un objeto de su tipo y proporciona
  un único punto de acceso a él para cualquier otro código.
*/


/*
  Singleton Ingenuo
  -----------------
  Es muy fácil implementar un Singleton descuidado. Tan solo necesitas esconder el constructor e implementar
  un método de creación estático.
  La misma clase se comporta de forma incorrecta en un entorno multihilo. Los múltiples hilos pueden
  llamar al método de creación de forma simultánea y obtener varias instancias de la clase Singleton.
*/
using System;
using System.Threading;

namespace RefactoringGuru.DesignPatterns.Singlton.Conceptual.NonThreadSafe
{
  public sealed class Singleton
  {
    private static Singleton _instance;

    // Should always be private to prevent direct construction calls with the `new` operator.
    private Singleton() { }

    // This is a static method that controls the access to the singleton instance.
    public static Singleton GetInstance()
    {
      if (_instance == null)
      {
        _instance = new Singleton();
      }
      return _instance;
    }

    public void someBusinessLogic()
    {
      // ...
    }
  }

  class Program
  {
    static void Main(string[] args)
    {
      // The client code
      Singleton s1 = Singleton.GetInstance();
      Singleton s2 = Singleton.GetInstance();

      if (s1 == s2)
      {
        Console.WriteLine("Singleton works, both variables contain the same instance.");
      }
      else
      {
        Console.WriteLine("Singleton failed, variables contain different instances.");
      }
    }
  }
}
// Output : Singleton works, both variables contain the same instance.


/*
  Singleton con seguridad en los hilos
  ------------------------------------
  Para arreglar el problema, debes sincronizar hilos durante la primera creacion del objeto Singleton.
*/

namespace Singleton
{
  class Singleton
  {
    private static Singleton _instance;

    // We now have a lock object that will be used to synchronize threads during first access to the Singleton.
    private static readonly object _lock = new object();

    private Singleton() { }

    public static Singleton GetInstance(string value)
    {
      // This conditional is needed to prevent threads stumbling over the lock once the instance is ready.
      if (_instance == null)
      {
        lock (_lock)
        {
          if (_instance == null)
          {
            _instance = new Singleton();
            _instance.Value = value;
          }
        }
      }
      return _instance;
    }

    public string Value { get; set; }
  }

  class Program
  {
    static void Main(string[] args)
    {
      Thread process1 = new Thread(() =>
      {
        TestSingleton("FOO");
      });

      Thread process2 = new Thread(() =>
      {
        TestSingleton("BAR");
      });

      process1.Start();
      process2.Start();

      process1.Join();
      process2.Join();
    }

    public static void TestSingleton(string value)
    {
      Singleton singleton = Singleton.GetInstance(value);
      Console.WriteLine(singleton.Value);
    }
  }
}

// Output : FOO

