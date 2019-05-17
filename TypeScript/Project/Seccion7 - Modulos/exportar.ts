'use strict'

/**
 * @name            Modulos
 * @description:    - Es una porcion de tu programa.
 *                  - Cada modulo cumple ciertas caracteristicas, funciones y objetivos especificos.
 *                  - Idealmente, tienenq ue se independientes de otros modulos.
 *                  - Debe estar compuesto por codigo limpio y logica definida.
 *                  - Debe de ser facil de compartir.
 * 
 *                  - Se puede exportar:
 *                          * Variables, funciones, clases e interfaces.
 */
export const PI:number = 3.1415;        // Asi se exporta una constante

function saludar():void{         // Asi se exporta una funcion
    console.log('Hola');
}

export class Jugador{                   // Asi se exporta una clase
    nombre:string;
}

export interface Mascota{               // Asi se exportan interfaces
    nombre:string;
}

// ESTO ES PARA UTILIZAR ALIAS
function trabalenguas_super_enredado():void{
    console.log(`jkhdsahkj,iuodsa,9832inj,kjdkjd`);
}

export { trabalenguas_super_enredado as palabras, saludar };    // Asi se exporta con un alias