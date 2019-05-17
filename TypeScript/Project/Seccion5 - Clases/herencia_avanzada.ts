'use strict'

class Animal_{
    nombre: string;

    constructor(nombre_:string){
        // console.log('Constructor de Animal_');
        this.nombre = nombre_;
    }

    caminar(distancia:number = 0):void{
        console.log(`${this.nombre} recorre ${distancia} metros.`);
    }
}

class Serpiente extends Animal_{
    longitud:number;
    constructor(nombre_:string, longitud_:number){
        // console.log('Constructor serpiente.');
        super(nombre_);
        this.longitud = longitud_;
    }

    caminar(distancia:number = 5):void{
        console.log(`Deslizando....`);
        super.caminar(distancia);
    }
}

class Caballo extends Animal_{

    constructor(nombre_:string){
        // console.log('Constructor caballo.');
        super(nombre_);
    }
}

let sam = new Serpiente('Sam - La serpiente', 23);
let zeus = new Caballo('Zeus - El caballo');

sam.caminar();
console.log(sam.longitud);
zeus.caminar(8);