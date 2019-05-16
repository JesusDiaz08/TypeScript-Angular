'use strict'

/**
 * @name:           void
 * @description:    Se utilizan para declarar tipos 'undefined' o 'null'
 *                  Tambien se utiliza cuando veamos funciones
 */

let inutil: void = undefined;
let vacio: void = null;

let respuesta: any = "Datos cargados";

if (respuesta != vacio){
    console.log('Cargar pagina');
}else{
    console.log('Error al cargar datos');
}

