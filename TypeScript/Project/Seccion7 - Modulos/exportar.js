'use strict';
exports.__esModule = true;
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
exports.PI = 3.1415; // Asi se exporta una constante
function saludar() {
    console.log('Hola');
}
exports.saludar = saludar;
var Jugador = /** @class */ (function () {
    function Jugador() {
    }
    return Jugador;
}());
exports.Jugador = Jugador;
// ESTO ES PARA UTILIZAR ALIAS
function trabalenguas_super_enredado() {
    console.log("jkhdsahkj,iuodsa,9832inj,kjdkjd");
}
exports.palabras = trabalenguas_super_enredado;
