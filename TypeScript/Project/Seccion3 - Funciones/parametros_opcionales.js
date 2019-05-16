'use strict';
/**
 * @description:        En TypeScript los parametros
 *                      son obligatorios, pero en
 *                      JavaScript los parametros
 *                      son opcionales.
 *
 *                      Para esto utilizamos el signo
 *                      '?' antes de los ':'
 */
function full_name(nombre, apellido) {
    return nombre + " " + apellido;
}
var result = full_name('Juan', 'Perez');
console.log(result);
function full_name2(nombre, apellido) {
    if (apellido) {
        return nombre + " " + apellido;
    }
    else {
        return nombre;
    }
}
var resulado2 = full_name2('Jesus');
console.log(resulado2);
