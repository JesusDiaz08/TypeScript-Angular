'use strict'

/**
 * @name:           Namespace (Espacio de nombre)
 * @description:    Es un espacio de trabajo.
 *                  - Permite AGRUPAR LOGICAMENTE UNA PORCION DE CODIGO
 *                  - EVITAR ERRORES (Objetos con el mismo nombre)
 * 
 *                  Antes se consideraba de la siguiente manera.
 *                  * NAMESPACE *  -  MODULO INTERNO
 *                  * MODULO *     -  MODULO EXTERNO
 */

namespace EspacioDeTrabajo{
    export class Persona{
        nombre:string;
    }

    export let repetida:number = 2;

    console.log('Hello')
}

let persona = new EspacioDeTrabajo.Persona();
persona.nombre = 'Rodrigo';
console.log(persona);