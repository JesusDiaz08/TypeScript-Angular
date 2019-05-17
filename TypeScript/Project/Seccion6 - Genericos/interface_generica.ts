'use strict'

/**
 * @summary:    Se puede poner por defecto que el
 *              tipo del generico sea un establecido
 */
interface Datos<T = string>{
    nombre: T;
}

let persona_libre : Datos = { nombre : "Juan" };
let persona_prresa : Datos<number> = { nombre : 359 };
