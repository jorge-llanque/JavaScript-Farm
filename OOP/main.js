/*----------------------------- class.js--------------------------------*/

/* // Clase Persona
class Persona{
    static _conteo = 0;    // propiedad estatica

    // Metodo estatico conteo()
    static get conteo(){
        return Persona._conteo + 'instancias';
    }
    
    //metodo estatico mensaje()
    static mensaje() {
        console.log('Hola a todos, soy un método estático');
    }
    
    //propiedades de la clase
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';
    
    // constructor de la clase
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo ++;
    }
    
    // metodo set
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }
    
    // metodo get
    get getComidaFavorita(){
        return `la comida favorita de ${this.nombre} es ${this.comida}`
    }
    
    //metodo de la clase
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }
    
    // metodo de la clase
    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
    
}

const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'IronMan', 'Yo soy IronMan');

spiderman.miFrase();
ironman.miFrase();

spiderman.setComidaFavorita = 'El pai cereza de la tia May';
console.log(spiderman.getComidaFavorita);
console.log(spiderman);

console.log('Conteo estático: ', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje(); */

/*----------------------------- constructores-multiples.js--------------------------------*/

/* class Persona {
    // metodo estatico como constructor de la clase :)
    static porObjeto({nombre, apellido, pais}) {
        return new Persona(nombre, apellido, pais);
    }
    //constructor de la clase
    constructor(nombre, apellido, pais) {
          this.nombre = nombre;
        this.apellido = apellido;
           this.pais1 = pais;
    }
    //metodo de la clase
    getInfo() {
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais1}`);
    }
}

const nombre1 = 'Melisa',
    apellido1 = 'Flores',
        pais1 = 'Honduras';

const fher = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    pais: 'Costa Rica'
}

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(fher);

persona1.getInfo();
persona2.getInfo();
 */

/*----------------------------- esnext.js--------------------------------*/
/* 
// clase rectangulo
class Rectangulo {
    #area = 0; // propiedad privada

    // constructor
    constructor(base =0, altura = 0){
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }
}

const rectangulo = new Rectangulo(10, 15);
console.log(rectangulo);
 */

/*----------------------------- singleton.js--------------------------------*/
/* class Singleton{
    static instancia;  //propiedad estatica
    nombre = '';        // propiedad estatica

    //constructor de la clase
    constructor(nombre = ''){
        if(!!Singleton.instancia){
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton('ironman');
const instancia2 = new Singleton('spiderman');
const instancia3 = new Singleton('blackpanter');
console.log(`nombre en la instancia 1 es: ${instancia1.nombre}`);
console.log(`nombre en la instancia 2 es: ${instancia2.nombre}`);
console.log(`nombre en la instancia 3 es: ${instancia3.nombre}`);
 */

/*----------------------------- sub-clases.js--------------------------------*/
/* class Persona {
    static _conteo = 0;
    
    static get conteo() {
        return Persona._conteo + `instancias`;
    }

    static mensaje() {
        console.log(`hola a todos, soy un método estático`);
    }
    codigo = '';
    frase = '';
    comida = '';

    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = ''){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo ++;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }
    
    get getComidaFavorita() {
        return `la comida favorita de ${this.nombre} es ${this.comida}`
    }
    
    quienSoy(){
        console.log(`soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}
//clase heredada
class Heroe extends Persona {
    clan = 'sin clan';

    //constructor que hace referencia a la clase heredada
    constructor(nombre, codigo, frase, clan) {
        super(nombre, codigo, frase, clan);
        this.clan = clan
    }
}

const spiderman = new Heroe('spiderman', 'spider', 'soy tu vecino', 'avengers');
console.log(spiderman); */
