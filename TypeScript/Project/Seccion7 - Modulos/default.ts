'use strict'

/**
 * @name:           Exportacion por default.
 * @description:    Cada modulo puede exporta 'por deafult' UNA SOLA VEZ.
 *                  Una sola exportacion por modulo
 * 
 *                  Esto la utilizan las librerias cuando quieren referirse
 *                  que UN MODULO ES MUY IMPORTANTE.
 */

interface Informacion{
    nombre:string;
    apellido:string;
}

class Periodista implements Informacion{
    nombre:string;
    apellido:string;

    preguntar(mensaje:string):void{
        console.log('Mensaje: ', mensaje);
    }
}

let periodista = new Periodista();
periodista.nombre = 'Xavier';
periodista.apellido = 'Ramirez';

// Vamos a exportar a periodista por default.
export default periodista;
