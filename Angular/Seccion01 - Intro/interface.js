function enviarMision(xmen) {
    console.log('Enviando a ' + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log('Enviar al cuartel: ', xmen.nombre);
}
// Wolverine debe de cumplir con la nomenclatura de lainterfaz
var wolverine = {
    nombre: 'Wolverine',
    poder: 'Regeneracion'
};
enviarMision(wolverine);
enviarCuartel(wolverine);
