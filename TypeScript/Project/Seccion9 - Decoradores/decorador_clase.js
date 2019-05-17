'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function imprimir(clase) {
    clase.prototype.nombre = 'Juan';
    console.log(clase.prototype);
}
/**
 * Los decoradores son CARACTERISTICAS EXPERIMENTALES.
 * debemos hacer esto en la consola:
 *      >  tsc -init
 */
var Persona = /** @class */ (function () {
    function Persona() {
        this.mensaje = 'Hola a todos';
    }
    Persona.prototype.saludar = function () {
        console.log(this.mensaje);
    };
    Persona = __decorate([
        imprimir
    ], Persona);
    return Persona;
}());
var yo = new Persona();
yo.saludar();
var tu = new Persona();
tu.saludar();
