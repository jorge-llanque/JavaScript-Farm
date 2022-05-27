// espejo

function espejo(string) {
  let string_reverse = "";
  for (let i = 1; i <= string.length; i++) {
    string_reverse = string_reverse.concat(string[string.length - i]);
  }
  return string_reverse;
}
console.log(espejo("hello world"));

function palabrasAlReves(string) {
  let arrString = string.split(" ");
  let nuevaPalabra = "";
  for (let i = arrString.length - 1; i >= 0; i--) {
    nuevaPalabra = nuevaPalabra.concat(" ", arrString[i]);
  }
  return nuevaPalabra.trim();
}
console.log(palabrasAlReves("I was in united states"));

function ordenarAlfabeticamente(string) {
  let newString = "";
  let arr = string.split("");
  arr.sort();
  for (elem of arr) {
    newString = newString.concat("", elem);
  }
  return newString;
}
console.log(ordenarAlfabeticamente("understand"));

function dividirPorLaMitad(string) {
  let first = "";
  let second = "";
  first = string.substring(0, Math.ceil(string.length / 2));
  second = string.slice(Math.ceil(string.length / 2));
  return [first, second];
}
console.log(dividirPorLaMitad("jorge"));

function convertirAobjeto(string) {
  let arrString = string.split(",");
  let objetoString = {};
  for (elem of arrString) {
    let arrKeyValue = elem.split(":");
    objetoString[arrKeyValue[0]] = arrKeyValue[1];
  }
  return objetoString;
}
console.log(
  convertirAobjeto("name:jorge,lastname:llanque,age:23,student:false")
);

function obtenerResto(x, y) {
  return x % y;
}
console.log(obtenerResto(8, 3));

function esPar(x) {
  if (x % 2 === 0) {
    return true;
  }
  return false;
}
console.log(esPar(20));

function elevarAlCuadrado(num) {
  return Math.pow(num, 2);
}
console.log(elevarAlCuadrado(5));

function redondearNumero(x) {
  return Math.round(x);
}
console.log(redondearNumero(23.2));

function esEntero(x) {
  if (x - Math.floor(x) === 0) {
    return true;
  }
  return false;
}
console.log(esEntero(231203978234));

function fizzBuzz(x) {
  let word = "";
  if (!(x % 3)) {
    word += "fizz";
  }
  if (!(x % 5)) {
    word += "buzz";
  }
  return word || x;
}
console.log(fizzBuzz(5));

function esPrimo(x) {
  if (x < 2) {
    return false;
  }
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(esPrimo(10));

const tieneTresDigitos = (x) => {
  value = x.toString();
  console.log(value);
  return value.length === 3 ? true : false;
};
console.log(tieneTresDigitos(122));

function arrayContiene(arr, elem) {
  return arr.includes(elem);
}
console.log(arrayContiene([6, 2, 7, 5, 4, 6], 4323));

function numeroMasGrande(numeros) {
  return numeros.sort((a, b) => a - b)[numeros.length - 1];
}
console.log(
  numeroMasGrande([2, 5, 3, 12, 57, 5, 33, 99, 9, 123231, 2, 3, 2, 1])
);

function multiplicarArgumentos() {
  let value = 1;
  if (arguments && arguments.length > 1) {
    for (let i = 0; i < arguments.length; i++) {
      value *= arguments[i];
    }
    console.log(value);
    return value;
  }
  return 0 || arguments;
}
console.log(multiplicarArgumentos(6, 2));

function crearGato(name, edad) {
  let newObj = {
    name,
    edad,
  };

  return newObj;
}
console.log(crearGato("Michi", 5));

function addFriend(nombre, edad) {
  let amigos = [];
  let obj = {
    nombre,
    edad,
  };
  amigos.push(obj);
  return amigos;
}
console.log(addFriend("fifi", 12));

// Convert an array to object
function arrayToObject(array) {
  return Object.assign({}, array);
}
console.log(arrayToObject(["joseph", 5, true]));

// Convert an object to array

function objectToArray(obj) {
  let arr = [];
  for (const [key, value] of Object.entries(obj)) {
    arr.push([key, value]);
  }
  return arr;
}
console.log(objectToArray({ name: "jorge", last: "llanque", age: 23 }));

// Convert an array to string
function arrayToString(arr) {
  let result = "";
  for (const elem of arr) {
    result += elem;
  }
  return result;
}
console.log(arrayToString([true, 23, "patricia"]));

// Convert an array to numbers
function arrayToNumbers(arr) {
  let result = "";
  for (const elem of arr) {
    result += elem;
  }
  return typeof Number.parseInt(result);
}
console.log(arrayToNumbers([2, 3, 5, 2, 5, 6, 3]));

// Convert un object to string
function objToString(obj) {
  let result = "";
  for (const [key, value] of Object.entries(obj)) {
    result += key + value;
  }
  return result;
}
console.log(objToString({ name: "Paty", edad: 23 }));

// Obtein only values of an array to string
function arrayValuesToString(arr) {
  return typeof arr.join();
}
console.log(arrayValuesToString(["a", "b", "c", 2, true]));

// Obtein only keys of an array
function arrayKey(arr) {
  let result = [];
  for (const key of arr.keys()) {
    result.push(key);
  }
  return result;
}
console.log(arrayKey(["as", "bb", 2, true]));

// Obtein only values of an object
function objectValuesToArray(obj) {
  let result = [];
  for (const value of Object.values(obj)) {
    result.push(value);
  }
  return result;
}
console.log(
  objectValuesToArray({
    name: "Mady",
    edad: 44,
    isMerried: false,
    isDivorced: true,
  })
);

// Obtein only keys of an object
function objectKeysToArray(obj) {
  let result = [];
  for (const key of Object.keys(obj)) {
    result.push(key);
  }
  return result;
}
console.log(
  objectKeysToArray({
    name: "Patricia",
    edad: 35,
    isMerried: false,
    hasChildren: true,
  })
);

// APLANAMIENTO
function aplanarArreglo(arg) {
  let nwA = [];

  function aplanar(array) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        aplanar(array[i]);
      } else {
        nwA.push(array[i]);
      }
    }
    return nwA;
  }
  return aplanar(arg);
}
console.log(aplanarArreglo([[[1, [55, [0, [23]]], 2, 3]], [4, 5], 6]));

// FUNCIONES RECURSIVAS
function potencia(base, exponente) {
  if (exponente === 0) {
    return 1;
  } else {
    return base * potencia(base, exponente - 1);
  }
}
console.log(potencia(2, 2));

// Funciones recursivas
function encontrarSolucion(objetivo) {
  function encontrar(actual, historia) {
    if (actual == objetivo) {
      return historia;
    } else if (actual > objetivo) {
      return null;
    } else {
      return (
        encontrar(actual + 5, `(${historia} + 5)`) ||
        encontrar(actual * 3, `(${historia} * 3)`)
      );
    }
  }
  return encontrar(1, "1");
}
console.log(encontrarSolucion(24));

// Funciones recursivas
function tryToConnect(switcher, each = 3) {
  if (switcher) {
    console.log("Connected");
  } else {
    console.log("Connecting...");
    setTimeout(() => {
      --each;
      if (!each) {
        switcher = true;
      }
      tryToConnect(switcher, each);
    }, 5000);
  }
}
tryToConnect(false);

// Rellenar con ceros a la izquierda
function alcocharConCeros(arr, condition) {
  for (const [key, elem] of arr.entries()) {
    let elemParsed = String(elem);
    while (elemParsed.length < condition) {
      elemParsed = "0" + elemParsed;
    }
    arr[key] = elemParsed;
  }
  return arr;
}
console.log(alcocharConCeros([4, 23, 660, 44, 0], 3));

const hospitals = [
  { id: "1", name: "AMITA Health St. Alexius Medical Center Hoffman Estates" },
  { id: "2", name: "AdventHealth Waterman" },
  { id: "3", name: "Advocate Christ Medical Center" },
  { id: "4", name: "Advocate Condell Medical Center" },
  { id: "5", name: "Advocate Good Samaritan Hospital" },
  { id: "6", name: "Advocate Good Shepherd Hospital" },
  { id: "7", name: "Advocate Illinois Masonic Medical Center" },
  { id: "8", name: "Advocate Lutheran General Hospital" },
  { id: "9", name: "Advocate Sherman Hospital" },
  { id: "10", name: "Advocate South Suburban Hospital" },
  { id: "11", name: "Advocate Trinity Hospital" },
  { id: "12", name: "Alta Bates Summit Medical Center" },
  { id: "13", name: "BANNER GATEWAY MEDICAL CENTER" },
  { id: "14", name: "Baystate Franklin Medical Center" },
  { id: "15", name: "Baystate Medical Center" },
  { id: "16", name: "Baystate Noble Hospital" },
  { id: "17", name: "Baystate Wing Hospital" },
  { id: "18", name: "Bon Secours Mary Immaculate Hospital" },
  { id: "19", name: "CentraState Medical Center" },
  {
    id: "20",
    name: "Community Health Center of Branch County dba ProMedica Coldwater Regional Hospital",
  },
  { id: "21", name: "Deaconess Gateway Hospital" },
  { id: "22", name: "Emanate Health Foothill Presbyterian Hospital" },
  { id: "23", name: "Emanate Health Inter-Community Hospital" },
  { id: "24", name: "Emanate Health Queen of the Valley Hospital" },
  { id: "25", name: "Gateway Regional Medical Center" },
  { id: "26", name: "Greater Baltimore Medical Center" },
  { id: "27", name: "Greater El Monte Community Hospital" },
  { id: "28", name: "Lenoir Memorial Hospital, Incorporated" },
  { id: "29", name: "Manatee Memorial Hospital" },
  { id: "30", name: "McLaren - Greater Lansing" },
];

// let a = "1";
// result = hospitals.find((data) => data.id === a);

// let sl = hospitals.slice(24);

// let adsa = hospitals.findIndex((data) => data.id == "29");

// let removed = hospitals.splice(28, 1);
const data = hospitals.map((hospital) => {
  const id = hospital.id;
  return {
    id,
  };
});
console.log(data);

const data = [
  { id: "1", name: "Ingenieria Espacial" },
  { id: "2", name: "Ingenieria Mecanica" },
  { id: "3", name: "Ingenieria en Sistemas" },
  { id: "4", name: "Licenciatura COMERCIAL" },
  { id: "5", name: "Ingenieria Espacial" },
  { id: "6", name: "Ingenieria Electronica  " },
  { id: "7", name: "Ingenieria en Redes" },
];

function pushItem(name) {
  let second = name
    .toLowerCase()
    .split(" ")
    .join("")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  let first = data.map((obj) => {
    obj.name = obj.name
      .toLowerCase()
      .split(" ")
      .join("")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    return obj;
  });
  console.log(first);
  return first.some((elem) => elem.name === second)
    ? "El nombre ya existe"
    : "Registro exitoso";
}

console.log(pushItem("Ingenieria mecatronica"));

//validacion de name duplicado sensible a mayusculas y minusculas
//validacion de name duplicado sensible a espacios en blancos y caracteres especiales y diacríticos(tildes)
//validacion de name duplicado sensible a carrera repetida ><<<<<<<<<<<<< No aplicado



const template = {
  quantity:2,
  properties: [
    { key: 'name', type: 'string', minWords: 1, maxWords:1, isCapitalized: true, everyWordIsCapitalized:true },
    { key: 'profession', type: 'string', minWords: 1, maxWords:1 },
    { key: 'age', type: 'number', containdecimal: false, minNumber: 10, maxNumber: 50 },
    { key: 'dateOfBirth', type: 'date', format:'yyyy/mm/dd', minDate: '1900/01/01', maxDate: '2000/01/01'},
    { key: 'genre', type: 'string', special: 'genre'},
    { key: 'address', type: 'string', minWords: 3, maxWords:10},
    { key: 'hasChildren', type: 'boolean'}
  ]
}

const getRandomNumber = (max, min) => {
  return Math.round(Math.random() * (max - min) + min)
}

const createAWord = () => {
  let allWords = [
    ['a', 'e', 'i', 'o', 'u'],
    ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
  ];

  let result = "";
  let randomLlimit = getRandomNumber(15,3);
  let isOdd = randomLlimit % 2 === 0 ? true : false

  let exchange, arr, position;

  
  for(let i = 0; i < randomLlimit; i++){
    if(result.length === 0){
      exchange = isOdd;
    }

    arr = (exchange) ? allWords[0] : allWords[1];

    position = getRandomNumber(arr.length - 1, 0)
    result += arr[position];
    exchange = !exchange;
  }
  return result;
};


const createStringElement = (minWords, maxWords, isCapitalized) => {
  let result = [];
  let randomLimit = getRandomNumber(maxWords, minWords);

  
    for(let i = 0; i < randomLimit; i++){
      let word = createAWord();

      if(isCapitalized){
        word = word.replace(word[0], word[0].toUpperCase());
      }
      result.push(word)
    }
  return result.join(' ');
}

const CreateSeed = (template) => {
  let boxData =[];
  
  for (let i = 0; i < template.quantity; i++) {
    let seed = {};
    template.properties.forEach(member => {
      if(member.type === 'string'){
        word = createStringElement(member.minWords, member.maxWords, member.everyWordIsCapitalized)
      }
      seed[member.key] = word;
    })
    boxData.push(seed);
  }
  return boxData;
}

console.log(CreateSeed({properties:[
  {type:'string', key:'name', minWords:1, maxWords:2, everyWordIsCapitalized:true},
  {type:'string', key:'lastname', minWords:1, maxWords:2, everyWordIsCapitalized:true}], quantity:100}))
