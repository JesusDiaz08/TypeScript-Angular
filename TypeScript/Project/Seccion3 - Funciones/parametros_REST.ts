'use strict'

/**
 * @name:           Parametros REST.
 * @description     La nomenclatura para los parametros REST
 *                  es la que a continuación se muestra:
 * 
 *                  function nameFunc(param:type, ...param:type[]): typeReturn{}
 */


function deporte(persona:string, ...deportes:string[]): string{
    console.log(deportes);
    return `A ${persona} le gustan los siguientes deportes: 
        ${deportes.join(',')}
    `;
}
console.log(deporte('Juan', 'Beisbol', 'Futbol', 'Tennis'));

function ejemplo(requerido:string, defaultt:string = 'sth', opcional?:string):void{}