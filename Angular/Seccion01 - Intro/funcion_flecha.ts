
/**
 * 
 * @description:        Las funciones de flecha resulven problemas
 *                      como los que se presentan en la funcion 
 *                      'problema'. 
 */

let miFuncion = function(a){
    return a;
}
// let nameFunA = (parametro1DeFuncionB, parametro2DeFuncionB) => retornoFuncionB 
let miFuncion_flecha = a => a;

console.log(miFuncion('Normal'));
console.log(miFuncion_flecha('Flecha'));

let miFuncion2 = function( a:number, b:number ){
    return a * b;
}
let miFuncion2_flecha = ( a:number , b:number ) => a * b;

let miFuncion3 = function( nombre:string ) {
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFuncion3_flecha = ( nombre:string ) => {
    nombre = nombre.toUpperCase();
    return nombre;
}


let nombre = 'Pedro';

let hulk = { 
    nombre: 'Bruce', 
    smash(){
        setTimeout( () => console.log( this.nombre + " smash!") , 1500);
    }
}
hulk.smash();