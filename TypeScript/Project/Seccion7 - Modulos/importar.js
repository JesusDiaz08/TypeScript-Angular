"use strict";
exports.__esModule = true;
/**
    import { PI } from './exportar' ;      // Asi se importa.
    import { saludar, Jugador, Mascota } from './exportar'
    import { palabras } from './exportar'
**/
var paquete = require("./exportar");
console.log(paquete.PI);
paquete.saludar();
var messi = new paquete.Jugador();
messi.nombre = 'Messi';
var zeus = { nombre: 'Zeus' };
console.log(messi, zeus);
paquete.palabras();
//Importar por default
var default_1 = require("./default");
console.log(default_1["default"].nombre + " " + default_1["default"].apellido);
default_1["default"].preguntar('¿Que edad tienes?');
