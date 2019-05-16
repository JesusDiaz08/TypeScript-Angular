'use strict'

/**
 * @name:           Parametros por default
 * @description:    A continuacion de definir el tipo de dato en los
 *                  parametros, asignamos el 'valor por default'.
 * 
 *                  function nameFunc(param:type, param:type = valueDefault):typeReturn{
 *                  
 *                  }
 */                 

/**
 * @name  asignar_posicion   
 * @param nombre 
 * @param numero 
 * @param posicion 
 * @returns {string}
**/

function asignar_posicion(nombre:string, numero:number, posicion:string = 'defensa'):string{
    return `${nombre} jugará con el numero ${numero} en la posicion ${posicion}.`;
}

// En TypeScript TODOS LOS PARAMETROS SON REQUERIDOS
let jugadorA: string = asignar_posicion('Juan', 21, 'delantero');
let jugadorB: string = asignar_posicion('Xavier', 17);
console.log(jugadorA);
console.log(jugadorB);