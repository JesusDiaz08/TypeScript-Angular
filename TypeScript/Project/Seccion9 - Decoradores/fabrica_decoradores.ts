'use strict'

/**
 * @name:           Fabrica de decorador
 * 
 * @description:    Es una funcion que retorna una expresion
 *                  que va a ser llamada por el decorador en
 *                  el tiempo de ejecucion.
 */

function mi_fabrica(valor:string){
    console.log('Esta es mi fabrica de decorador');
    return function( objetivo: any){
        console.log('Este es mi decorador y hago algo con valor y con objetivo')
    }
}
