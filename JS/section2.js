// FUNCIONES

/*
  Una funcion es un bloque de codigo reutilizable
  que se puede ejecutar cada vez que se necesite
*/

// Declaracion de una funcion
function saludar(){
  console.log("Hola desde una funcion");
}

//ejecutar una funcion
saludar();
saludar();
saludar();

// Codigo de colores (curiosidad)
let variable = "hola";
console.log("Hola desde un archivo");

// Funciones con parametros
function saludarConParametros(nombre = "Jhon",apellido = "Doe"){
  alert(`Hola ${nombre} ${apellido}`);
  // console.log("Hola " + nombre + " " + apellido);
}

// Ejecutar una funcion con parametros
// saludarConParametros("Juan", "Perez");
// saludarConParametros("Pedro", "Martinez");
// saludarConParametros("Maria", "Lopez");
// saludarConParametros();


// Funciones recursivas

function recursiva(){
  alert("Hola esta funcion es recursiva");
  recursiva();
}

/*

  Ejercicio 3:

  Crear un programa que basado en un numero N
  verifique si es par o impar e imprima los siguientes mensajes:
  "El numero N es par"
  "El numero N es impar"
  opcional:
  Si no es un numero entero imprimir el siguiente mensaje:
  "Por favor ingrese un numero entero"

  Ejercicio 4:

  Crea un programa que si te llamas "Juan" y tienes 20 años
  imprima el siguiente mensaje:
  "Bienvenido Juan, gracias por confiar en nosotros"
  Si no se cumple la condicion imprimir:
  "Lo sentimos pero no tienes acceso a este sitio"
*/