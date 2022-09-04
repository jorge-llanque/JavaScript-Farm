class Publicador {
  constructor(){
    this.subscriptors = [];
  }

  subscribe(subscriptor){
    this.subscriptors.push(subscriptor);
  }
  
  unsubscribe(subscriptor){
    this.subscriptors = this.subscriptors.filter(item => item !== subscriptor);
  }

  notify(event){
    let index = 0;
    this.subscriptors.forEach(item => {
      item.buzon.call(this, index, event);
      index++;
    })
  }
}

class Subscriptor{
  constructor(id){
    this.id = id;
    console.log("Se ha creado el subscriptor #: " + id);
  }
  buzon(edicion){
    console.log(`Subscriptor # ${this.id} recibio una nueva edicion: ${edicion}`);
  };
}
const periodico = new Publicador();

const subscriptor1 = new Subscriptor(1);
const subscriptor2 = new Subscriptor(2);
const subscriptor3 = new Subscriptor(3);

periodico.subscribe(subscriptor1);
periodico.subscribe(subscriptor2);
periodico.notify("Nueva Edicion");
periodico.unsubscribe(subscriptor1);
periodico.notify("Tercera edicion")