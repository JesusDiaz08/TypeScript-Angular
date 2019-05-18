let avengers:string[] = ['ThorGordo', 'Steve', 'Tony']

/**
 * @summary:        A diferencia de la restructuracion de los objetos,
 *                  en los arreglos la destructuracion es secuencial.
 * 
 *                  thor apunta a 'ThorGordo'
 *                  capi apunta a 'Steve'
 *                  ironman apunta a 'Tony'
 */

let [thor, capi, ironman ] = avengers;

//Si quiero apuntar a uno solo
let [ /*Aqui va Thor*/, /* Aqui va capi */, Ironman] = avengers;

console.log(thor, capi, ironman);
console.log(Ironman);