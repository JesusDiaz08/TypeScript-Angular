var Persona = /** @class */ (function () {
    function Persona(nombre_) {
        this.nombre = nombre_;
    }
    Persona.prototype.hablar = function (mensaje) {
        console.log('Mensaje: ', mensaje);
    };
    return Persona;
}());
var instance = new Persona('Jadee');
console.log(instance.nombre);
instance.hablar('Hola');
