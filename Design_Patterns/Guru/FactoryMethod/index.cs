using System;
namespace RefactoringGuru.DesignPatterns.FactoryMethod.Conceptual
{
  abstract class Creator
  {
    public abstract IProduct FactoryMethod();
    public string SomeOperation()
    {
      var product = FactoryMethod();
      var result = "Creator: The same creator's code hsa just worked with " + product.Operation();

      return result;
    }
  }

  // Concrete Creators override the factory method in order to change the resulting product's type.
  class ConcreteCreator1 : Creator
  {
    public override IProduct FactoryMethod()
    {
      return new ConcreteProduct1();
    }
  }
  class ConcreteCreator2 : Creator
  {
    public override IProduct FactoryMethod()
    {
      return new ConcreteProduct2();
    }
  }

  // The Product interface declares the operations that all concrete products must implement
  public interface IProduct
  {
    string Operation();
  }

  // Concrete Products provide various implementations of the Product interface.
  class ConcreteProduct1 : IProduct
  {
    public string Operation()
    {
      return "{Result of ConcreteProduct1}";
    }
  }
  class ConcreteProduct2 : IProduct
  {
    public string Operation()
    {
      return "{Result of ConcreteProduct2}";
    }
  }

  class Client
  {
    public void Main()
    {
      Console.WriteLine("App: Launched with the ConcreteCreator1.");
      ClientCode(new ConcreteCreator1());
      ClientCode(new ConcreteCreator2());
    }
  }

}