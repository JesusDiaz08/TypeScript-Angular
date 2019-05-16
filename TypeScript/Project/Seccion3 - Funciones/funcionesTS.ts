'use strict'

/**
 * @name:           Funciones en TypeScript
 * @description:    La declaracion de funciones se 
 *                  hace de la siguiente forma:
 * 
 *                  function nameFunction(param:type):typeReturn{
 *                  
 *                  }
 */

function multiplicar(x:number,y:number):number{
    return x * y;
}

let producto: number = multiplicar(2,4);
console.log('Producto: ',producto);

let sumatoria: number = 0;
console.log("Sumatoria antes: ", sumatoria);

function sumar():void{
    sumatoria++;
}

sumar();
console.log("Sumatoria despues: ", sumatoria);