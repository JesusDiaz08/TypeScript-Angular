
/**
 * @summary:        Destructuracion de objetos
 */

let avenger = {
    nombre: 'Steve',
    clave: 'Capitan América',
    poder: 'Droga'
}

/*
let nombre:string = avenger.nombre;
let clave:string = avenger.clave;
let poder:string = avenger.porder;

Esto se puede hacer utilizando destructuracion

let { nombreAtributo1, nombreAtributo2, ..., nombreAtributoN } = Objeto

Y si queremos usar un alias, se hace de la siguiente manera

let { nombreAtributo1 : nameAlias , ... , nombreAtributoN } = Objeto

*/
let { nombre:name_ , clave, poder } = avenger;
console.log( name_ , clave, poder);