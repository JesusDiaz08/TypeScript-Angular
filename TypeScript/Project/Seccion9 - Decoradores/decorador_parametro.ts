'use strict'

class Profesor{
    saludar(@decorador_parametro mensaje:string, 
                                 mensaje2:string, 
            @decorador_parametro mensaje3:string){
        console.log(mensaje);
    }
}

let jesus = new Profesor();
jesus.saludar('Hola', 'X', 'Y');
console.log(Object.getPrototypeOf(jesus));

function decorador_parametro(objetivo: Object, metodo:string, indice:number){
    const metadata = "indices_decorados";

    if (Array.isArray(objetivo[metadata])){
        objetivo[metadata].push(indice);
    }else{
        objetivo[metadata] = [indice];
    }
}