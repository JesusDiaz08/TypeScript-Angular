
interface Xmen{
    nombre: string;
    poder: string;
}


function enviarMision( xmen: Xmen ){
    console.log('Enviando a mision: ' + xmen.nombre);
}

function enviarCuartel( xmen: Xmen ){
    console.log('Enviar al cuartel: ', xmen.nombre);
}

// Wolverine debe de cumplir con la nomenclatura de lainterfaz
let wolverine:Xmen = {
    nombre: 'Wolverine',
    poder: 'Regeneracion'
}

enviarMision(wolverine);
enviarCuartel(wolverine);
