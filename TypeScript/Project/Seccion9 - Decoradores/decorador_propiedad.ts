'use strict'

class Planeta{
    @decorador_propiedad
    nombre:string;

    constructor(nombre_:string){
        this.nombre = nombre_;
    }
}

/**
 * @name:           decorador_propiedad
 * @description:    Siempre reciben 2 parametros.
 *                  1.  Objetivo    Object (es de JS)
 *                  2.  Propiedad   string
 */
function decorador_propiedad( objetivo: Object, propiedad:string ){
    console.log('Objetivo: ', objetivo);      // Es nuestra clase  
    console.log('Propiedad: ', propiedad);    // Al que se aplica al decorador    

    const respaldo = 'respaldo';
    const getter = function(this:any){
        
        console.log('Valor de propiedad: ', this[respaldo]);

        return this[respaldo] + "...";
    }

    const setter = function( this: any, valor: any){
        this[respaldo] = valor;
    }

    Object.defineProperty(objetivo,propiedad, {
        get: getter,
        set: setter
    })
}

let mi_planeta = new Planeta('Jupiter');
let mi_planeta2 = new Planeta('Tierra');
console.log(mi_planeta.nombre);
console.log(mi_planeta2.nombre);