function Gato(nombre) {
  this.nombre = nombre;
  this.maullar = () => `Mi nombre es ${this.nombre} ... Meow!`;
}

const sam = new Gato("Sam");
const kitty = new Gato("Kitty");
console.log(sam.maullar());
console.log(kitty.maullar());

function Usuario(nombre, github) {
  this.nombre = nombre;
  this.github = github;
}

Usuario.prototype.introduccion = function () {
  return `Mi nombre es ${this.nombre}, mi usuario de Github es ${this.github}`;
};

let juan = new Usuario("Juan", "jorgitorey");
console.log(juan.introduccion());

/* -------------------------- SINCE ECMA5 TO ACTUALLY ---------------------------*/
/*    -------------------------------------------------------------------------  */

class Person {
  constructor(first, last, age, gender, interests) {
    this.name = { first, last };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi I'm ${this.name.first}`);
  }
  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now`);
  }
}

let people = new Person("Jorge", "LLanque", 23, "M", "music, programation");

console.log(people);
people.greeting();
people.farewell();

class Teacher extends Person {
  constructor(first, last, age, gender, interests, position, subject) {
    super(first, last, age, gender, interests);
    this.position = position;
    this._subject = subject;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}

const marcelo = new Teacher(
  "Marcelo",
  "Villa",
  44,
  "M",
  "cars, cycles",
  "Teacher",
  "Maths"
);
console.log(marcelo);
marcelo.greeting();
marcelo.farewell();
console.log(marcelo.subject);
marcelo.subject = "physics";
console.log(marcelo.subject);
