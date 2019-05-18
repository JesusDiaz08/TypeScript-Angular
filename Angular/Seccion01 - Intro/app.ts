// Uso de Let y Const

//var nombre = "Ricardo Tapia";
let nombre:string = "Ricardo Tapia";
//var edad = 23;
let edad:number = 23;

/*
var PERSONAJE = {
  nombre: nombre,
  edad: edad
};*/
const PERSONAJE : { nombre:string, edad:number } = {
  nombre: nombre,
  edad: edad
};

// Cree una interfaz que sirva para validar el siguiente objeto
interface Superhero{
  nombre: string;
  artesMarciales:string[];
}

let batman:Superhero = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

// Convertir esta funcion a una funcion de flecha
function resultadoDoble( a, b ){
  return (a + b) * 2
}
let resultadoDobleF = ( a:number , b:number ) => ( a + b) * 2;

/* Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre, poder, arma ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};*/
function getAvenger( nombre:string, poder?:string, arma:string = 'arco' ){
  let mensaje:string;
  if( poder ){
    //mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`
  }else{
    mensaje = `${nombre} tiene el poder de: ${poder}.`
  }
};

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
class Rectangulo{
  public base:number;
  public altura:number;

  public constructor(){}

  public calculaArea(  ):number{
    return this.altura * this.base;
  }
}
