/*
    new Promise(function(resolve, reject){
        ...
    }).then(valor => {
        ...
    }).catch(err => {
        ...
    })

*/

/*
PROMESAS ANIDADAS
    ...
    ...
    .then(personaje1 => {
        console.log(personaje1)
        return obtenerPersonaje(2)
    })
    .then(personaje2 => {
        ...
    })


*/

const users = [
  {
    id: "100",
    name: "Jorge",
    lastname: "LLanque Chagua",
    age: 24,
    heigth: 1.74,
  },
  {
    id: "101",
    name: "Miguel",
    lastname: "Lopez Chagua",
    age: 25,
    heigth: 1.64,
  },
  {
    id: "102",
    name: "Andrea",
    lastname: "Quispe Chagua",
    age: 26,
    heigth: 1.45,
  },
  {
    id: "103",
    name: "Angela",
    lastname: "Colque Chagua",
    age: 27,
    heigth: 1.8,
  },
  {
    id: "104",
    name: "Maria",
    lastname: "Condori Chagua",
    age: 28,
    heigth: 1.78,
  },
  {
    id: "105",
    name: "Jesus",
    lastname: "Vasquz Chagua",
    age: 29,
    heigth: 1.72,
  },
  {
    id: "106",
    name: "Roberto",
    lastname: "Lupe Chagua",
    age: 21,
    heigth: 1.71,
  },
  {
    id: "107",
    name: "Marco",
    lastname: "Morales Chagua",
    age: 22,
    heigth: 1.72,
  },
  {
    id: "108",
    name: "Mauricio",
    lastname: "Villa Chagua",
    age: 23,
    heigth: 1.74,
  },
  { id: "109", name: "Franco", lastname: "Lima Chagua", age: 24, heigth: 1.56 },
  { id: "110", name: "Cesar", lastname: "Angel Chagua", age: 24, heigth: 1.83 },
];

/* let nombre = "Marco";
users.forEach(element => {
    if (element.name == nombre) {
        console.log(element);
    }
}); */

//All users that are 25 or more print them
/* let filterUsers = [];
let ageMinimun = 25;
users.forEach(element => {
    if (element.age >= ageMinimun) {
        filterUsers.push(element)
    }
})

console.log(filterUsers); */

// Calculate how many users are tall

/* let mostTall = (users) => {
    let tallminimun = 1.80;
    let peoplemostTall = [];

    users.forEach(element => {
        if (element.heigth >= tallminimun) {
            peoplemostTall.push(element);
        }
    });

    return peoplemostTall.length
}

console.info('personas mas altas: ', mostTall(users)); */

// A través de promesas traer los users ordenados alfabeticamente

let listUsers = () => {
  return users.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
};

let permit = false;
let getUsers = () => {
  return new Promise((resolve, reject) => {
    if (permit) {
      resolve(listUsers());
    } else {
      reject(new Error("No tienes permiso"));
    }
  });
};

getUsers()
  .then((usersSorted) => {
    console.log(usersSorted);
  })
  .catch((err) => {
    console.error(err);
  });

let a = [...[...[..."..."]]].length;
console.log(a);

console.log(Symbol("foo") === Symbol("foo"));
