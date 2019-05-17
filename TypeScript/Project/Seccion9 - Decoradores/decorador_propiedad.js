'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Planeta = /** @class */ (function () {
    function Planeta(nombre_) {
        this.nombre = nombre_;
    }
    __decorate([
        decorador_propiedad
    ], Planeta.prototype, "nombre", void 0);
    return Planeta;
}());
/**
 * @name:           decorador_propiedad
 * @description:    Siempre reciben 2 parametros.
 *                  1.  Objetivo    Object (es de JS)
 *                  2.  Propiedad   string
 */
function decorador_propiedad(objetivo, propiedad) {
    console.log('Objetivo: ', objetivo); // Es nuestra clase  
    console.log('Propiedad: ', propiedad); // Al que se aplica al decorador    
    var respaldo = 'respaldo';
    var getter = function () {
        console.log('Valor de propiedad: ', this[respaldo]);
        return this[respaldo] + "...";
    };
    var setter = function (valor) {
        this[respaldo] = valor;
    };
    Object.defineProperty(objetivo, propiedad, {
        get: getter,
        set: setter
    });
}
var mi_planeta = new Planeta('Jupiter');
var mi_planeta2 = new Planeta('Tierra');
console.log(mi_planeta.nombre);
console.log(mi_planeta2.nombre);
