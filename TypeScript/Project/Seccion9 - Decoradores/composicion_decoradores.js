'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @summary     Multiples decoradores se pueden aplicar a los objetos.
 */
function entrando(clase) {
    console.log('First decorator.');
}
function imprimiendo(clase) {
    console.log('Second decorator');
}
/**
 * Composion de decoradores
 */
// Ambos decoradores se aplican al obetio Animal.
// Puede declararse tambien como: @entrando @imprimiendo
var Animal = /** @class */ (function () {
    function Animal() {
        this.raza = 'Perro';
    }
    Animal = __decorate([
        entrando,
        imprimiendo
    ], Animal);
    return Animal;
}());
var mi_mascota = new Animal();
