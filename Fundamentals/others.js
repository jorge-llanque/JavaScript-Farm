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
