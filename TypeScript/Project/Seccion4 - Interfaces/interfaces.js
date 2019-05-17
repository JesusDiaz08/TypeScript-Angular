'use strict';
function adoptar(mascota) {
    console.log("Yo adopt\u00E9 a " + mascota.nombre);
}
var mascotaA = { nombre: "Toby", raza: "Pitbull" }; // Es un objeto
var mascotaB = { nombre: "Canelo" }; // Debe de cumplir con los atributos de la interfaz
adoptar(mascotaA);
adoptar(mascotaB);
