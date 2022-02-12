/*----------------------------- ALERTS & PROPS -----------------------------------*/
/*--------------------------------------------------------------------------------*/

alert('hola mundo');

let nombre = prompt('Introduce tu nombre', 'Jorge Llanque Chagua');
console.log({nombre});

const seleccionar = confirm('¿Está seguro de querer salir de la página?');
console.log(seleccionar);

function signIn(){
    nombre = prompt('Introduce tu nombre')
    if(!nombre){
        signIn()
    }else{
        alert(`Bienvenido ${nombre}`);
    }
}

signIn();