console.log("Hola, desde un archivo");

// Comentario de una lineas

/*
  Comentarios
  de varias
  lineas
*/

/*
  Variables.
  Las variables son contenedores de datos:
  var: es una variable que puede cambiar su valor en cualquier parte del codigo (hay excepciones).
  let: es una variable que puede cambiar su valor pero solo en el bloque de codigo que se contenga.
  const: es una variable que no puede cambiar su valor.
*/

  // Declaracion de variables
var nombre = "Angel"; //Variable gobal
let apellido = "Arevalo"; //Variable local
const PI = 3.1416; //Constante
// Imprimir el valor de una variable
console.log(nombre, apellido, PI);
// Cambiar valores de una variable
nombre = "Manuel";
apellido = "Lopez";
//PI = "Hola"; No puedo cambiar el valor de una constante
//  Imprimir las variables
console.log(nombre, apellido, PI);

// Tipos de datos
let string = "Hola"; //Cadena de texto (string)
let numero = 10; //Numero (number)
let decimal = 10.5; // Numero decimal (nomber)
let booleano = true; //booleano (boolean) true/false
let nulo = null; //Nulo (nulo)
let indefinido = undefined; //Indefinido (undefined)

// operadores comparativos
let mayor = 10 > 5; //true
let menor = 10 < 5; //false
let mayorIgual = 10 >= 5; //true
let menorIgual = 10 <= 5; //false
let igual = 10 == 5; //false
let diferente = 10 != 5; //true
let exactamenteIgual = 10 === "10"; // false
console.log(mayor, menor, mayorIgual, menorIgual, igual, diferente, exactamenteIgual);

// operadores logicos
let and = true && false; //false
let or = true || false; //true
let not = !true; //false
console.log(and, or, not);

// operadores aritmeticos
let suma = 10 + 5; //15
let resta = 10 - 5; //5
let multiplicacion = 10 * 5; //50
let division = 10 / 5; //2
let modulo = 10 % 5; //0
let exponente = 10 ** 5;// 100000
console.log(suma, resta, multiplicacion, division, modulo);

// operadores de asignacion
let igualar = 10; //10

// Condicionales
let condicion = 10 > 5;
if(condicion){
  console.log('Hola');
} else if(condicion){
  console.log('Adios');
} else {
  console.log('Nada');
}


/* EJERCICIOS */

// (Facil)
var uno = !true || false; // false
var dos = false && !false; // false
var tres = true && !false; // true

//(Medio)
var cuatro = (5 === 5) || (!true); // true
var cinco = (!0) || (5 < 0); // true
var seis = (3 > 4) && (!0); // false

//Avanzado
var siete = ( ((false || true) && (!false && true) )) || (true && false) // true
var ocho = (6 === 3+3) && (9/3 >= 3); //true
var nueve = (!(!false) || ( ("1" == 1)) && (!false === true) ); // true

//Hardcore
var diez = !(!true) === !( !( 5 >= 5 ) );// true
var once = !( true && (!true === !( !(8 === 4*2) )) ); // true

console.log(diez,once)

//Ultra-Hardcore
var doce = !( true && (!true === !( !(16 === (4*2) + 8))) ) !== (false); // true

console.log(doce)

//Leyenda
var trece = !(((!(!(10 / 5 == "2") === false) != false) === ((5 * 5) <= (100 / 4))) && (!((1 + 1) !== (10 / 5)) !== (true))); // true

/*Ejericio 1

  Crear un programa que basado en la edad de una persona
  imprima los siguientes mensajes:
  0 - 5: "Eres un bebe"
  6 - 11: "Eres un niño"
  12 - 18: "Eres un adolescente"
  19 - 30: "Eres un joven"
  31 - 64: "Eres un adulto"
  65 - 120: "Eres un adulto mayor"
  Si la edad es menor a 0 o mayor a 120 imprimir:
  "La edad no es valida (Eres una imposibilidad en este mundo)"

*/
let edad = prompt("Ingresa tu edad: ");
if(edad>=0 && edad <= 120){
  if(edad >= 0 && edad <= 5){
      alert("Eres un bebe");
  }
  if(edad >= 6 && edad <= 11){
      alert("Eres un niño");
  }
  if(edad >= 12 && edad <= 18){
      alert("Eres un adolescente");
  }
  if(edad >= 19 && edad <= 30){
      alert("Eres un joven");
  }
  if(edad >= 31 && edad <= 64){
      alert("Eres un adulto");
  }
  if(edad >= 65 && edad <= 120){
      alert("Eres un adulto mayor");
  }
} else{
  alert("La edad no es valida (Eres una imposibilidad en este mundo");
}

/*

  Ejercicio 2
  
  Crear un programa que basado en el dia de la semana
  imprima los siguientes mensajes:
  Lunes - Viernes: "Es un dia de la semana"
  Sabado - Domingo: "Es un fin de semana"
  Si no es ninguno de los dias anteriores imprimir:
  "Por favor ingrese un dia de la semana valido"

*/

let dia = prompt("escribe un dia: ");

if(dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "jueves" || dia == "viernes"){
  alert("es un dia de la semana semana");
}
else if(dia == "sabado" || dia == "domingo"){
  alert("es un dia de fin de semana");
}
else{
  alert("Por favor ingrese un dia de la semana valido");
}