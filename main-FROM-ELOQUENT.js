// Ciclo de un triángulo
/*for(let i = "#"; i.length <= 7; i+= "#"){
    
    console.log(i);
}*/

// FizzBuzz
/*for(let i = 1; i <= 100; i++){


    if(i % 3 === 0){
        console.log("Fizz");
    }else if(i % 5 === 0){
        console.log("Buzz");
    }else {
        console.log(i);
    }
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    }
}*/

// Tablero de ajedrez
let vacio = " ";
let caracter = "#";
let resultado = "";
let tamanio = 8;
for(let i = 0; i < tamanio; i++){
    for(let j = 0; j < tamanio; j++){
        if((i + j) % 2 !== 0){
            resultado += caracter;
        }else{
            resultado += vacio;
        }
    }
    resultado += "\n";
}
console.log(resultado);