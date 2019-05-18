/**
 * @summary:    Es tema de 3S6
 *              Ejecutar una tarea, codigo o funcion, cuando
 *              una tarea asincrona es terminada
 */
var nombre_promesa = new Promise(function (resolve, reject) {
    // Aqui va el proceso asincrono
    setTimeout(function () {
        console.log('Promesa terminada');
        // Termina bien
        //resolve();          // Especifica que la promesa pudo cumplirse.
        // Termina mal
        reject();
    }, 1500);
});
console.log('Paso 01');
/** ====== UTILIZANDO LA PROMESA ======
 *  nombre_promesa.then( functionResolve, funcionReject )
 *
 **/
nombre_promesa.then(function () {
    console.log('Ejecutar cuando sale bien');
}, function () {
    console.error('Ejecutar cuando algo sale mal');
});
console.log('Paso 02');
