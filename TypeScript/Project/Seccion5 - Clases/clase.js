'use strict';
/**
 * @name:           Clase
 * @description:    Es una plantilla para la creacion de objetos
 *                  que comparten un modelo predefinido.
 *
 *                  La idea es representar una entidad o un
 *                  concepto general.
 *
 */
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca_, fecha_creacion_, color_, puertas_) {
        this.kilometraje = 0;
        console.log(this, "This antes de inicializar.");
        this.marca = marca_;
        this.fecha_creacion = fecha_creacion_;
        this.color = color_;
        this.puertas = puertas_;
        console.log(this, "This despues de inicializar");
    }
    Vehiculo.prototype.avanzar = function () {
        this.kilometraje = this.kilometraje + 100;
    };
    return Vehiculo;
}());
var mi_vehiculo = new Vehiculo("Ford", "1998", "Rojo", 4);
// Acceder a un atributo
console.log("Kilometraje antes de avanzar: ", mi_vehiculo.kilometraje);
// Acceder a un metodo
mi_vehiculo.avanzar();
mi_vehiculo.avanzar();
mi_vehiculo.avanzar();
console.log("Kilometraje despues de avanzar: ", mi_vehiculo.kilometraje);
var carroB = new Vehiculo('Nissan', '2006', 'Blanco', 2);
console.log("\nUn carro de " + mi_vehiculo.marca + " tiene " + mi_vehiculo.puertas + " puertas y \nUn carro de " + carroB.marca + " tiene " + carroB.puertas + " puertas.");
