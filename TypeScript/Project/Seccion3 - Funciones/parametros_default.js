'use strict';
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
function asignar_posicion(nombre, numero, posicion) {
    if (posicion === void 0) { posicion = 'defensa'; }
    return nombre + " jugar\u00E1 con el numero " + numero + " en la posicion " + posicion + ".";
}
// En TypeScript TODOS LOS PARAMETROS SON REQUERIDOS
var jugadorA = asignar_posicion('Juan', 21, 'delantero');
var jugadorB = asignar_posicion('Xavier', 17);
console.log(jugadorA);
console.log(jugadorB);
