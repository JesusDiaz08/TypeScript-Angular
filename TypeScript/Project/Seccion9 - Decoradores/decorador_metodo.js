'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Estudiante = /** @class */ (function () {
    function Estudiante(notas_) {
        this.notas = notas_;
    }
    // Aqui va el decorador.
    Estudiante.prototype.obtenerNotas = function () {
        for (var _i = 0, _a = this.notas; _i < _a.length; _i++) {
            var nota = _a[_i];
            console.log(nota);
        }
        return this.notas;
    };
    __decorate([
        modificar_metodo(false)
    ], Estudiante.prototype, "obtenerNotas", null);
    return Estudiante;
}());
// Fabrica de decorador
// decorador de metodo.
function modificar_metodo(valor) {
    return function (objetivo, propiedad, descriptor) {
        console.log('Objetivo: ', objetivo); // Es toda la clase
        console.log('Propiedad: ', propiedad); // Es donde se aplica el decorador
        console.log('Descriptor: ', descriptor); //
        descriptor.value = valor; //
        console.log('Descriptor: ', descriptor); //
    };
}
var estudiante = new Estudiante([1, 23, 7, 90, 43]);
estudiante.obtenerNotas;
