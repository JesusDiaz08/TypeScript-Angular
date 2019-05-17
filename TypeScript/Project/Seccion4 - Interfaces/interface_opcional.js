'use strict';
function dimensiones(medidas) {
    var area = medidas.ancho * medidas.largo;
    if (medidas.alto) {
        return "El \u00E1rea de tu casa es " + area + " mts y de alto " + medidas.alto + " mts";
    }
    else {
        return "El \u00E1rea de tu casa es " + area + " mts";
    }
}
console.log(dimensiones({ ancho: 10, largo: 12, alto: 3 }));
console.log(dimensiones({ ancho: 10, largo: 12 }));
