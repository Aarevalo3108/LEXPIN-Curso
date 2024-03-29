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



// Funciones con retorno de valores
function retornar(condicion = false){
  let mensaje = "Hola desde retornar";
  if(condicion){
    return mensaje;
  } else {
    return "La condicion no se cumple";
  }
}

console.log(retornar());

// Alcance de variables
if(true){
  /*
    Variables locales, solo funcionan en el bloque de codigo donde fueron declaradas
  */
  let variable = "hola";
  /*
    Variables globales, se pueden utilizar en cualquier parte del codigo
  */
  var variable2 = "hola2";
}

console.log(variable, variable2);

// Metodos de cadenas de texto
let cadena = "Hola mundo";
// longitud de la cadena
console.log(cadena.length);
// transforma a mayusculas
console.log(cadena.toUpperCase());
// Transforma a minusculas
console.log(cadena.toLocaleLowerCase());
// Obtener un caracter de la cadena
console.log(cadena.charAt(0));
// Verificar si una cadena contiene un texto
console.log(cadena.includes("mundo"));
// Reemplazar texto de una cadena
console.log(cadena.replace("mundo", "a todos"));

// cadena = cadena.replace("mundo", "a todos");

// Obtener un substring
console.log(cadena.slice(0,4));
// Crear un substring
console.log(cadena.substring(0,4));

/*

  Ejercicio 1:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la cadena de texto en mayusculas
  Ejemplo:
  Entrada: "Hola mundo"
  Salida: "HOLA MUNDO"

  Ejercicio 2:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la cadena de texto en minusculas

  Ejercicio 3:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la longitud de la cadena de texto

  Ejercicio 4:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la primera letra de la cadena de texto

  Ejercicio 5:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la ultima letra de la cadena de texto

  Ejercicio 6:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la cadena de texto sin la primera letra

  Nota: debes crear un boton en HTML para ejecutar cada ejercicio
  (son 6 botones), cada boton debe pedirmele al usuario un texto
  y mostrarle el resultado del ejercicio correspondient

*/

//arreglos
let frutas = ["manzana","pera","mango","fresa"];
console.log(frutas);

// Imprimir un elemento de una arreglo

console.log(frutas[0]);
let aleatorios = [1,"hola",true,2.5,[1,2,3]];
let compras = [
                ["manzana","pera"],
                ["jamon","queso"],
                ["carne","pollo"]
              ];
console.log(compras[1][0]);

let actividades = [
  [ // [0]
    ["comer en casa","comer afuera"], //[0][1]
    ["dormir en cama", "dormir en el sofa"] // [0][1] //mostrar "dormir en el sofa".
  ], // [1]
  ["correr","saltar"]
];
console.log(actividades[0][1][0]); //

// Metodos de arreglos
frutas = ["manzanas","peras","mango","fresa"];
// Agregar un elemento al final del arreglo
frutas.push("uvas");
console.log(frutas);
//  Eliminar el ultimo elemento del arreglo
frutas.pop();
console.log(frutas);
//  Agregar un elemento al inicio del arreglo
frutas.unshift("uvas");
console.log(frutas);
// Eliminar el primer elemento del arreglo
frutas.shift();
console.log(frutas);
// Obtener el indice de un elemento del arreglo
console.log(frutas.indexOf("mango"));
// Eliminar un elemento del arreglo por su indice
frutas.splice(2,1);
console.log(frutas);
// Reemplazar un elemento del arreglo por su indice
frutas[1] = "piña"
console.log(frutas);
//  Ordenar una lista alfabeticamente
frutas.sort();
console.log(frutas);
//  Invertir una lista ordenada alfabeticamente
frutas.reverse();
console.log(frutas);
// Obtener un subarreglo
console.log(frutas.slice(0,2));
// Obtener la longitud de un arreglo
console.log(frutas.length);

// Bucles, loops o ciclos
// ciclo for

for(let i=0;i<frutas.length;i++){
  // console.log(i);
  console.log(frutas[i]);
}

//  Bucle while
let i = 0;
while(i < 10){
  console.log(i);
  i++
}

// Bucle  do while
let j = 0;
do{
  console.log(j);
  j++;
} while(j<10);

//  Bucle for of (recorrer arrays)
let carros = ["Mazda","Toyota","Chevrolet","Renault"];
for(let carro of carros){
  console.log(carro);
}

// Objetos
let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 25,
  hobbies: ["correr","saltar","dormir"],
  direccion: {
    calle: "calle 1",
    numero: 1,
    barrio: "Barrio 1"
  },
  saludar: function(){
    console.log("Hola desde un objeto");
  }
}

console.log(`Hola mi nombre es ${persona.nombre} ${persona.apellido} y tengo ${persona.edad}`);

// Array de objetos
let personas = [
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    hobbies: ["correr","saltar","dormir"],
    direccion: {
      calle: "calle 1",
      numero: 1,
      barrio: "Barrio 1"
    },
    saludar: function(){
      console.log("Hola desde un objeto");
    }
  },
  {
    nombre: "Maria",
    apellido: "Salome",
    edad: 25,
    hobbies: ["correr","saltar","dormir"],
    direccion: {
      calle: "calle 1",
      numero: 1,
      barrio: "Barrio 1"
    },
    saludar: function(){
      console.log("Hola desde un objeto");
    }
  },
  {
    nombre: "Manuel",
    apellido: "Hernandez",
    edad: 25,
    hobbies: ["correr","saltar","dormir"],
    direccion: {
      calle: "calle 1",
      numero: 1,
      barrio: "Barrio 1"
    },
    saludar: function(){
      console.log("Hola desde un objeto");
    }
  }
]

// For in (sirve para recorrer objetos)

for(let propiedad in persona){
  // console.log(propiedad); <-- valor de la propiedad
  // console.log(persona[propiedad]); <-- forma para recorrer las propiedades (nombre,apellido,edad,etc)
  console.log(persona[propiedad]);
  // console.log(persona["direccion"]); <-- forma para mostrar propiedad en un for in, fuera seria como persona.direccion
}

// Ejericio de una lista de objetos que contienen listas de objetos
let compras_supermercado = [
  {
    nombre: "Juan",
    productos: [
      {
        nombre: "manzana",
        cantidad: 2,
        precio: 1000,
      },
      {
        nombre: "pera",
        cantidad: 3,
        precio: 2000,
      },
    ],
  },
  {
    nombre: "Maria",
    productos: [
      {
        nombre: "jamon",
        cantidad: 1,
        precio: 5000,
      },
      {
        nombre: "queso",
        cantidad: 2,
        precio: 10000,
      },
    ],
  },
  {
    nombre: "Pedro",
    productos: [
      {
        nombre: "carne",
        cantidad: 1,
        precio: 10000,
      },
      {
        nombre: "pollo",
        cantidad: 2,
        precio: 8000,
      },
    ],
  },
];

for (let persona of compras_supermercado) {
  for (let propiedad in persona) {
    console.log(`Tengo una propiedad llamada ${propiedad}
    y tiene un valor el cual es: ${persona[propiedad]}`);
    if (propiedad == "productos") {
      for (let producto of persona[propiedad]) {
        for (let propiedad_producto in producto) {
          console.log(`Tengo una propiedad llamada ${propiedad_producto}
         y tiene un valor el cual es: ${producto[propiedad_producto]}`);
        }
      }
    }
  }
}

// Ejercicio hecho con FOR
for (let i = 0; i < compras_supermercado.length; i++) {
  console.log(
    `${compras_supermercado[i].nombre} tiene los siguientes productos:`
  );
  for (let j = 0; j < compras_supermercado[i].productos.length; j++) {
    console.log(compras_supermercado[i].productos[j].nombre);
  }
}
