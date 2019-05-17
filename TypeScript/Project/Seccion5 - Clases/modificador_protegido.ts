'use strict'

/**
 * @summary:    Los modificadores protegidos pueden 
 *              ser accedidos desde las subclases y/o
 *              clases derivadas.
 */

class Instrumento{
    protected nombre:string;

    public constructor(nombre_:string){
        this.nombre = nombre_;
    }
}

class Piano extends Instrumento{
    private de_cuerda:boolean = false;

    public constructor(nombre_:string){
        super(nombre_);

    }

    public getNombre():void{
        console.log(this.nombre);
    }
}

let mi_piano = new Piano('Mi piano de cola');
mi_piano.getNombre();