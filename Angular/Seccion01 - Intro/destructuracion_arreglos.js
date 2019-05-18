var avengers = ['ThorGordo', 'Steve', 'Tony'];
/**
 * @summary:        A diferencia de la restructuracion de los objetos,
 *                  en los arreglos la destructuracion es secuencial.
 *
 *                  thor apunta a 'ThorGordo'
 *                  capi apunta a 'Steve'
 *                  ironman apunta a 'Tony'
 */
var thor = avengers[0], capi = avengers[1], ironman = avengers[2];
//Si quiero apuntar a uno solo
var Ironman = avengers[2];
console.log(thor, capi, ironman);
console.log(Ironman);
