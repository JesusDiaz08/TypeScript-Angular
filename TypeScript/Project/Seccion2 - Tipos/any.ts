'use strict'

/**
 * @name:           Any
 * @description     Se utiliza cuando.
 *                  -   Utilizamos librerias de 3os y no 
 *                      sabemos que tipos estamos tratando.
 *                  -   Utilizamos any para evitar errores de compilacion
 *                  -   Cuando no sabemos de que atributos hablamos.
 */

let object_library: any; // No tengo certeza de que tipo es
object_library = 23;
object_library = true;
object_library = 'Xavier';

// Podria tener atributos.
console.log(object_library.unknownAttribute);   

// Podria tener metodos que desconocemos
console.log(object_library.unknownMehtod());

// Arrays
let lista: any[] = [1, true, "Karla", false];