'use strict'

/**
 * @name:           interfaces para funciones
 * @description:    Las interfaces también son capaces de 
 *                  definir y describir funciones.
 * 
 *                  Definimos la funcion con su parametros
 *                  y su retorno con sus tipos.
 * 
 *                  NOTA: LA IDEA ES QUE SE RESPETEN LOS
 *                  PARAMETROS Y LO QUE RETORNA LA FUNCION
 */

interface Login{
    (email:string, password:string):boolean;
}

let session: Login;
/**
 * @summary:    email_ y password_ no tiene forzosamente que
 *              llamarse como el nombre de los atributos de 
 *              la interfaz.
 */
session = function(email_:string, password_:string){
    if ( email_.length > 10 && password_.length > 10){
        return true;
    }else{
        return false;
    }
}

let compra:Login;
