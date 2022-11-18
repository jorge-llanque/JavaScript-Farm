using System;
namespace RefactoringGuru.DesignPatterns.Prototype.Conceptual
{
  public class Person
  {
    public int Age;
    public DateTime BirthDate;
    public string Name;
    public IdInfo IdInfo;

    public Person ShallowCopy()
    {
      return (Person)this.MemberwiseClone();
    }

    public Person DeepCopy()
    {
      Person clone = (Person)this.MemberwiseClone();
      clone.IdInfo = new IdInfo(IdInfo.IdNumber);
      clone.Name = String.Copy(Name);
      return clone;
    }
  }

  public class IdInfo
  {
    public int IdNumber;
    public IdInfo(int idNumber)
    {
      this.IdNumber = idNumber;
    }
  }

  class Program
  {
    static void Main(string[] args)
    {
      Person p1 = new Person();
      p1.Age = 42;
      p1.BirthDate = Convert.ToDateTime("1977-01-01");
      p1.Name = "Jack Daniels";
      p1.IdInfo = new IdInfo(666);

      // Perform a shallow copy of p1 and assign it to p2.
      Person p2 = p1.ShallowCopy();

      // Make a deep copy of p1 and assign it to p3
      Person p3 = p1.DeepCopy();
    }
  }
}