/* Ternary Operator */
const dia = 0;
const horaActual = 8;
let horaApertura;
let mensaje;

horaApertura = [0, 6].includes(dia) ? 9 : 11;
console.log(horaApertura);

mensaje =
  horaActual >= horaApertura
    ? `Estamos atendiendo`
    : `hoy abrimos a las ${horaApertura}`;
console.log(mensaje);

/* protip-retorno.js */

//funcion de flecha que retorna una funcion
const crearPersona = (nombre, apellido) => ({ nombre, apellido });
const persona = crearPersona("Jorge", "Llanque");
console.log(persona);

//funcion de flecha que retorna en un array sus argumentos
const imprimeArgumentos = (edad, ...args) => args;

const [casado, vivo, nombre, saludo] = imprimeArgumentos(
  10,
  false,
  true,
  "Jorge",
  "Hola"
);
console.log({ casado, vivo, nombre, saludo });

/*----------------------------- protip-ternario.js--------------------------------*/

// Operador ternario dentro de una función de flecha
const elMayor = (a, b) => (a > b ? a : b);
console.log(elMayor(5, 1));

// Operador ternario que recibe un bool como argumento de una funcion
const tieneMembresia = (miembro) => (miembro ? "2 dolares" : "10 dolares");
console.log(tieneMembresia(false));

// Operador ternario dentro de un array
const amigo = true;
const amigoArr = ["Peter", "Tony", "Dr Strange", amigo ? "Thor" : "Loki"];
console.log(amigoArr);

const nota = 40;
const grado =
  nota >= 95
    ? "EXCELENTE"
    : nota >= 90
    ? "PERFECTO"
    : nota >= 85
    ? "MUY BIEN"
    : nota >= 80
    ? "BIEN"
    : nota >= 75
    ? "REGULAR"
    : nota >= 70
    ? "MAL"
    : nota >= 65
    ? "MUY MAL"
    : nota >= 60
    ? "PESIMO"
    : nota >= 55
    ? "INDIGNANTE"
    : nota >= 50
    ? "VERGONSOZO"
    : nota >= 45
    ? "SIN CAPACIDAD INTELECTUAL"
    : nota >= 40
    ? "NO VOLVERA A ASISTIR A LAS CLASES"
    : nota >= 35
    ? "EXPULSADO DEFINIDO > TE ASIGNARAN A UN COLEGIO MEDIOCRE"
    : nota >= 30
    ? "EXPULSADO DEFINIDO > TE ASIGNARAN A UN COLEGIO DE DISCAPACITADOS"
    : nota >= 25
    ? "EXPULSADO DEFINIDO > TE INSTALARAN EN UN MANICOMIO"
    : nota >= 20
    ? "EXPULSADO DEFINIDO > ERES UN ESTORBO PARA EL PAIS TE ENCARCELARAN"
    : nota >= 15
    ? "EXPULSADO DEFINIDO > NO TE QUIEREN EN LA CARCEL TE USARAN PARA PRUEBAS DE DESCRUBIMIENTOS CIENTIFICOS"
    : nota >= 10
    ? "EXPULSADO DEFINIDO > ERES UN ERROR TE QUITARAN LOS ORGANOS Y LO USARAN PARA ASFALTAR LAS CALLES ALEJADAS"
    : nota >= 5
    ? "EXPULSADO DEFINIDO > TUS ORGANOS DAÑAN LAS CALLES, SOLO USARAN TU PIEL PARA HACER BOLSAS DE BASURA EL RESTO LO DESINTEGRARAN"
    : nota >= 0
    ? "EXPULSADO DEFINIDO > LAS BOLSAS SON SENCILLAS, SE PREFIRIÓ "
    : "MORITE";
console.log(nota, grado);

/*----------------------------- valor-referencia.js--------------------------------*/

// Pasamos los valores de un array a traves de argumentos a una funcion de flecha
const sum = (x, y, z) => console.log(x + y + z);
let args = [0, 1, 2];
sum(...args);

// Rompemos valores por referencia
const instrumentos = ["piano", "guitarra"];
const newInstrumentos = [...instrumentos];

newInstrumentos.push("saxo");
console.table({ instrumentos, newInstrumentos });
