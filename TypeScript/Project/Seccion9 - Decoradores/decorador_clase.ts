'use strict'

/**
 * @name            Decorador
 * @description     Es un tipo de declaracion que puede ser adjuntada a:
 *                      - Declaracion de una clase.
 *                      - Metodo.
 *                      - Propiedad.
 *                      - Parámetro.      
 *                  Sintaxis:
 *                      @expresion
 *                  La expresion DEBE EVALUAR UNA FUNCIÓN EN TIEMPO DE EJECUCIÓN
 *                  Y VA A TRAER INFORMACIÓN QUE SERÁ AGREGADA A LO QUE SE ADJUNTA.   
 * 
 *                  NOTA:
 *                      CREAR UN DECORADOR es CREAR UNA FUNCION y UTILIZAR su 
 *                      ETIQUETA EN OTRA PARTE.
 */

/**
 * @param {Function} clase : Se le va a pasar la clase completa
 * @description:        La idea es que se pueda observar, modificar o reemplazar
 *                      una definición de la clase.
 */ 
function imprimir(clase: Function){
    clase.prototype.nombre = 'Juan';

    console.log(clase.prototype);
}

/**
 * Los decoradores son CARACTERISTICAS EXPERIMENTALES.
 * debemos hacer esto en la consola:
 *      >  tsc -init
 */

@imprimir
class Persona{
    mensaje:string = 'Hola a todos';

    saludar(){
        console.log(this.mensaje);
    }
}

let yo:Persona = new Persona(); 
yo.saludar();

let tu:Persona = new Persona(); 
tu.saludar();