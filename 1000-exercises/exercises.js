/**
 * 01.Crear un espejo de un string dado.
 */
// v1 - REGULAR
function espejoV1(string) {
    let string_reverse = "";
    for (let i = 1; i <= string.length; i++) {
      string_reverse = string_reverse.concat(string[string.length - i]);
    }
    return string_reverse;
  }
  console.time("espejoV1")
  espejoV1("A".repeat(100000))
  console.timeEnd("espejoV1")

// v2 - Bien
  const espejoV2 = (text) => text.split("").reverse().join("");
  console.time("espejoV2")
  espejoV2("A".repeat(100000))
  console.timeEnd("espejoV2")

// v3 - Buenisimo
  function espejoV3(text){
    let data ="";
    let i = (text.length) -1;
    for (;i >=0; i--) {
      data+= text.at(i);
    }
    return data
  }
  console.time("espejoV3")
  espejoV3("A".repeat(100000))
  console.timeEnd("espejoV3")



/**
 * 02. Ordenar alfabeticamente una cadena de texto
 */
 function auxiliar(){
     const words = 'abcdefghijklmnopqrstuvwxyz';
     let box = "";
     for (let index = 0; index <1000; index++) {
         box += words.at(Math.round(Math.random()*((words.length-1)-0)+0));
     }
     return box
 }
 
 function ordenarAlfabeticamente(string) {
    let newString = "";
    let arr = string.split("");
    arr.sort();
    for (elem of arr) {
      newString = newString.concat("", elem);
    }
    return newString;
  }
  console.log(ordenarAlfabeticamente(auxiliar()));

/**
 * 03. Ordenar una frase al reves
 */
 function auxiliarv2(){
  const words = 'abcdefghijklmnopqrstuvwxyz';
  let box = "";
  let mainbox = ""
  for(let index = 0; index < 1000; index++){
    let iterator = Math.round(Math.random()*10-3)+3;
    for (let index = 0; index < iterator; index++) {
      box += words.at(Math.round(Math.random()*((words.length-1)-0)+0));
    }
    mainbox += box
    box = "";
    if(index === 1000) break;
    mainbox += " "
  }
  return mainbox;
}
console.log(auxiliarv2())

// v1
 function fraseAlrevesV2(string) {
  let arrString = string.split(" ");
  let nuevaPalabra = "";
  for (let i = arrString.length - 1; i >= 0; i--) {
    nuevaPalabra = nuevaPalabra.concat(" ", arrString[i]);
  }
  return nuevaPalabra.trim();
}
console.log(fraseAlrevesV2("al reves"));

// v2
function fraseAlrevesV2(string){
  return string.split(" ").reverse().join(" ")
}

/**
 * 04. 
 */