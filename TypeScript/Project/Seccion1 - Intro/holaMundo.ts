'use strict'

/**
 * 
 * @param nombre 
 * @description    Saludo
 * @return  {String} saludo
 */
function saludar(nombre){
    return 'Hola ' + nombre;
}

let nombre = "Jesus";
let result = saludar(nombre);

/**
 * @summary:    Para compilar un proyecto TypeScript
 *              debemos de realizar lo siguientes.
 * 
 *              tsc holaMundo.ts -> Genera código JavaScript
 * 
 */