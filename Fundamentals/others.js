/** There are two ways in which values are converted to other types
 * in JavaScript.
 * Explicit Conversion and Coercion
 */
// Explicit conversion
const val = Boolean(0);
console.log(val); // => false
const val2 = Boolean(-1);
console.log(val2); // => true
const val3 = Boolean(1);
console.log(val3); // => true
const val4 = Boolean([].length);
console.log(val4); // => false
// Coercion
const multiply = "2" * "3";
console.log(multiply, typeof multiply); // => 6 number
const sum = "2" + 1;
console.log(sum); // => 21
const sum2 = 1 + "2";
console.log(sum2); // => 12
const sum3 = "1" - "2";
console.log(sum3); // => -1

/** WHAT'S THE TYPE OF A VALUE
 * typeof is for primitive values
 * instanceof is for objects
 */
console.log(typeof "hi"); // => string
console.log(typeof undefined); // => undefined
console.log(typeof null); // => object  (unfortunately is a bug of js, TC39 tried to resolved, but not)
console.log(typeof true); // => boolean
console.log(typeof 23); // => number
console.log(typeof function () {}); // => function

console.log(function () {} instanceof Function); // true
console.log({} instanceof Object); // true
console.log([] instanceof Array); // true (Equal to Object)

/*----------------------------- ALERTS & PROPS -----------------------------------*/
/*--------------------------------------------------------------------------------*/

alert("hola mundo");

let nombre = prompt("Introduce tu nombre", "Jorge Llanque Chagua");
console.log({ nombre });

const seleccionar = confirm("¿Está seguro de querer salir de la página?");
console.log(seleccionar);

function signIn() {
  nombre = prompt("Introduce tu nombre");
  if (!nombre) {
    signIn();
  } else {
    alert(`Bienvenido ${nombre}`);
  }
}

signIn();

/*----------------------------- switch.js--------------------------------*/
const dia = 2;
switch (dia) {
  case 0:
    console.log("domingo");
    break;
  case 1:
    console.log("lunes");
    break;
  case 2:
    console.log("martes");
    break;
  case 3:
    console.log("miercoles");
    break;
  default:
    console.log("juernes");
}

/*----------------------------- CICLOS.js--------------------------------*/
const carros = ["Mazda", "Ford", "Honda", "Toyota"];
let i = 0;
let sumador = [];
console.warn("DO WHILE");

while (i < carros.length) {
  console.log(carros[i]);
  i++;
}
console.warn("WHILE");

let j = 2;
do {
  console.log(carros[j]);
  break;
} while (carros[j]);

const heroes = ["Superman", "Batman", "Aquaman", "Mujer Maravilla"];

console.warn("For tradicional");
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

console.warn("For In");
for (let i in heroes) {
  console.log(heroes[i]);
}

console.warn("For Of");
for (let heroe of heroes) {
  console.log(heroe);
}

/* // Eventos onclick
document.querySelector('html').onclick = () => alert('ouch, deja de pincharme') */

/* ---------------------------------------------------------------------------------- */

/* // Cambiador de imagen
const myImage = document.querySelector('img');

myImage.onclick = function() {
    const miSrc = myImage.getAttribute('src'); 
    (miSrc === 'images/perro-1.jpg') ? myImage.setAttribute('src','images/perro-2.jpg') 
                                     : myImage.setAttribute('src','images/perro-1.jpg');
} */

/* -------------------------------------------------------------------------------------- */

/* // Mensaje de bienvenida personalizado
const miBoton = document.querySelector('button');
const miTitulo = document.querySelector('h1');

function estableceNombreUsuario () {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es fresco,' + miNombre;
}

if(!localStorage.getItem('nombre')){
    estableceNombreUsuario();
}else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es fresco,' + nombreAlmacenado;
}

miBoton.onclick = function(){
    estableceNombreUsuario();
} */
/* -------------------------------------------------------------------------------------- */
/**
 * Throwing and catching exceptions
 * Let´s examine what happens in line B: an error occurred, but the best place to
 * handle the problem is nto the current location, it's line A. There, we can skip
 * the current file and move on to the next one.
 */
function readProfiles(filePaths) {
  const profiles = [];
  for (const filePath of filePaths) {
    try {
      const profile = readOneProfile(filePath);
      profiles.push(profile);
    } catch (err) {
      // A
      console.log("Error in: " + filePath, err);
    }
  }
}

function readOneProfile(filePath) {
  const profile = new Profile();
  const file = openFile(filePath);
  //...(Read the data in `file` int `profile`)
  return profile;
}

function openFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error("Could not find file" + filePath); // B
  }
  // ...(Open the file whose path is `filePath`)
}

/**
 * Error has the following subclasses.
 * AgregateError: represents multiple errors at once. In the standard library,
 * only Promise.any() uses it.
 * RangeError: indicates a value that is not in the set or range of allowable values.
 * ReferenceError: indicates that an invalid reference value has been detected.
 * SyntaxError: indicates that a parsing error has occurred.
 * TypeError: is used to indicate an unsuccessful operation when none of the other
 * nativeerror objects are an appropriate indication of the failure cause.
 * URIError: indicates that one of the global URI handling functions was used
 * in a way that is incompatible with its definition.
 * @see https://github.com/tc39/proposal-error-cause
 */

const obj = {
  s: 023,
  df: "3",
  myMethod() {
    return "abc";
  },
};
console.log(obj.myMethod());
