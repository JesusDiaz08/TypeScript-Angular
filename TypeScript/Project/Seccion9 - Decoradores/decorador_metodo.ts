'use strict'

class Estudiante{
    notas:number[];

    constructor(notas_:number[]){
        this.notas = notas_;
    }

    // Aqui va el decorador.
    @modificar_metodo(false)
    obtenerNotas(){
        for( let nota of this.notas){
            console.log(nota)
        }
        return this.notas;
    }
}

// Fabrica de decorador
// decorador de metodo.
function modificar_metodo(valor:boolean){
    return function(objetivo:any, propiedad:string, descriptor:PropertyDescriptor){
        console.log('Objetivo: ', objetivo);    // Es toda la clase
        console.log('Propiedad: ', propiedad);  // Es donde se aplica el decorador
        console.log('Descriptor: ', descriptor); //
        descriptor.value = valor;   //
        console.log('Descriptor: ', descriptor); //
    }
}

let estudiante:Estudiante = new Estudiante([1,23,7,90,43]);
estudiante.obtenerNotas;