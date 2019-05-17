'use strict';
/**
 * @name:           Namespace (Espacio de nombre)
 * @description:    Es un espacio de trabajo.
 *                  - Permite AGRUPAR LOGICAMENTE UNA PORCION DE CODIGO
 *                  - EVITAR ERRORES (Objetos con el mismo nombre)
 *
 *                  Antes se consideraba de la siguiente manera.
 *                  * NAMESPACE *  -  MODULO INTERNO
 *                  * MODULO *     -  MODULO EXTERNO
 */
var EspacioDeTrabajo;
(function (EspacioDeTrabajo) {
    var Persona = /** @class */ (function () {
        function Persona() {
        }
        return Persona;
    }());
    EspacioDeTrabajo.Persona = Persona;
    EspacioDeTrabajo.repetida = 2;
    console.log('Hello');
})(EspacioDeTrabajo || (EspacioDeTrabajo = {}));
var persona = new EspacioDeTrabajo.Persona();
persona.nombre = 'Rodrigo';
console.log(persona);
