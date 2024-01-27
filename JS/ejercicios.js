
/*
  Nota: debes crear un boton en HTML para ejecutar cada ejercicio
  (son 6 botones), cada boton debe pedirmele al usuario un texto
  y mostrarle el resultado del ejercicio correspondient

*/

/*
  Ejercicio 3:

  Crear un programa que basado en un numero N
  verifique si es par o impar e imprima los siguientes mensajes:
  "El numero N es par"
  "El numero N es impar"
  opcional:
  Si no es un numero entero imprimir el siguiente mensaje:
  "Por favor ingrese un numero entero"
*/

function paridad(){
  const num = prompt("Escribe un numero:");
  if(!isNaN(num)&&num>1){
    if(num%2==0){
      return alert(`el numero ${num} es par`);
    } else {
      return alert(`el numero ${num} es impar`);
    }
  } else{
    return alert("por favor, ingrese un numero valido");
  }
}

/*
  Ejercicio 4:

  Crea un programa que si te llamas "Juan" y tienes 20 años
  imprima el siguiente mensaje:
  "Bienvenido Juan, gracias por confiar en nosotros"
  Si no se cumple la condicion imprimir:
  "Lo sentimos pero no tienes acceso a este sitio"
*/

function detectarJuan(){
  const nombre = prompt("Escribe tu nombre:");
  if(nombre.toLowerCase()=="juan"){
    const edad = prompt("Escribe tu edad:");
    if(edad==20){
      return alert("Bienvenido Juan, gracias por confiar en nosotros.");
    }
  }
  return alert("Lo sentimos pero no tienes acceso a este sitio.");
}

/*
  Ejercicio 1:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la cadena de texto en mayusculas
  Ejemplo:
  Entrada: "Hola mundo"
  Salida: "HOLA MUNDO"
*/

function MAYUS(){
  const aux = prompt("Escribe una palabra o frase:");
  return alert(`la frase escrita en mayusculas es: \n\n ${aux.toUpperCase()}`)
}

/*
  Ejercicio 2:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la cadena de texto en minusculas
*/

function minus(){
  const aux = prompt("Escribe una palabra o frase:");
  return alert(`la frase escrita en minusculas es: \n\n ${aux.toLowerCase()}`)
}

/*
  Ejercicio 3:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la longitud de la cadena de texto
*/

function longitud(){
  const aux = prompt("Escribe una palabra o frase:");
  return alert(`ese texto tiene una longitud de ${aux.length} caracteres.`)
}

/*
  Ejercicio 4:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la primera letra de la cadena de texto
*/

function first(){
  const aux = prompt("Escribe una palabra o frase:");
  return alert(`la primera letra de ese texto es "${aux.charAt(0)}"`)
}


/*
  Ejercicio 5:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la ultima letra de la cadena de texto
*/

function last(){
  const aux = prompt("Escribe una palabra o frase:");
  return alert(`la ultima letra de ese texto es "${aux.charAt(aux.length-1)}"`)
}

/*
  Ejercicio 6:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la cadena de texto sin la primera letra
*/

function text(){
  const aux = prompt("Escribe una palabra o frase:");
  return alert(`el texto sin la primera letra es:\n\n${aux.slice(1)}`)
}

// ejercicio Jose Cruz

function corte(){
  const aux = prompt("Escribe una palabra o frase:");
  return alert(`el texto sin la primera letra es:\n\n${aux.slice(0,aux.length*0.3+1)+aux.slice(aux.length*0.7,aux.length)}`)
}
/*
  Ejercicios 7:
    Crear una funcion que reciba como parametro un arreglo de numeros
    e imprima en consola cada elemento del arreglo
*/
function Ejercicio7(data){
  for(i=0;i<data.length;i++){
    console.log(data[i]);
  }
}
const nros1 = [1,2,3,4,5];
Ejercicio7(nros1);
  /*
  Ejercicios 8:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola la suma de todos los elementos del arreglo
*/

function Ejercicio8(data){
  let aux = 0;
  for(i=0;i<data.length;i++){
    aux += data[i];
  }
  console.log(aux);
}
const nros2 = [1,2,3,4,5];
Ejercicio8(nros2);
  /*
  Ejercicios 9:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola el promedio de todos los elementos del arreglo
*/

function Ejercicio9(data){
  let aux = 0;
  for(i=0;i<data.length;i++){
    aux += data[i];
  }
  console.log(aux/data.length);
}
const nros3 = [1,2,3,4,5];
Ejercicio9(nros3);

  /*
  Ejercicios 10:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola el numero mayor del arreglo
*/


function Ejercicio10(data){
  let aux,mayor;
  for(i=0,mayor=data[i];i<data.length;i++,aux = data[i]){
    if(mayor<aux){
      mayor = data[i];
    }
  }
  console.log(mayor);
}
const nros4 = [1,20,3,4,5];
Ejercicio10(nros4);

  /*
  Ejercicios 11:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola el numero menor del arreglo
*/

function Ejercicio11(data){
  let aux, menor;
  for(i=0,menor=data[i];i<data.length;i++,aux = data[i]){
    if(menor>aux){
      menor = data[i];
    }
  }
  console.log(menor);
}
const nros5 = [100,-2,3,0.4,-5];
Ejercicio11(nros5);

  /*
  Ejercicios 12:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola los numeros pares del arreglo
*/

function Ejercicio12(data){
  for(i=0;i<data.length;i++){
    if(!(data[i]%2)){
      console.log(data[i])
    }
  }
}
const nros6 = [100,20,3,0.4,5,6];
Ejercicio12(nros6);

  /*
  Ejercicios 13:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola los numeros impares del arreglo
*/

function Ejercicio12(data){
  for(i=0;i<data.length;i++){
    if(data[i]%2){
      console.log(data[i])
    }
  }
}
const nros7 = [100,20,3,0.4,5,6];
Ejercicio12(nros7);

  /*
  Ejercicios 14:
  Crear una funcion que reciba como parametro un arreglo de frutas
  e imprima el nombre de la fruta mas larga*/

function Ejercicio12(data){
  let frutaMayor,aux;
  for(i=0,frutaMayor = data[i]; i<data.length; i++){
    aux = data[i];
    if(frutaMayor.length < aux.length){
      frutaMayor = aux;
    }
  }
  console.log(frutaMayor);
}
const frutas = ['patilla','melon','mandarina','tamarindoooo','mango','uva'];
Ejercicio12(frutas);

/*

  Ejericio 15:
  Crea una funcion que realice la sucecion de fibonacci

*/

function fibo(n){
  for(i=0,A=1,B=1,aux=0; i<n; i++){
    if(i<3){
      if(i<1){console.log(0);}
      else{console.log(1);}
    } else{
      console.log(A + B);
      aux=A;
      A += B;
      B=aux;
    }
  }
}
const N = 11;
fibo(N);


/*

  Ejericio 16:
  Crea las funciones agregar, eliminar, buscar, actualizar de un arreglo.
  Cada funcion debe recibir como parametro el arreglo y el elemento a agregar, eliminar,
  buscar o actualizar y debe retornar el arreglo modificado. Debes imprimir el arreglo
  modificado en cada funcion para verificar su funcionamiento.

*/

function add(arreglo,dato){
  console.log(arreglo);
  return arreglo.push(dato);
}
function remove(arreglo,dato){
  console.log(arreglo);
  for(i=0;i<arreglo.length;i++){
    if(arreglo[i]==dato){
      return arreglo.splice(i,1);
    }
  }
  return console.log(`el dato "${dato}" no existe en el arreglo`);
}
function search(arreglo,dato){
  for(i=0;i<arreglo.length;i++){
    if(arreglo[i]==dato){
      return console.log(`el dato "${dato}" existe y tiene posicion ${i}`);
    }
  }
  return console.log(`el dato "${dato}" no existe en el arreglo`);
}
let lista = ['patilla','melon','mandarina','tamarindo','mango','uva'];
// add(lista,'mango');
// remove(lista,'tamarindo');
search(lista,'tamarindo');
console.log(lista);

/*

Segun el siguiente arreglo de objetos:

  const personas = [
    {
      nombre: "Juan",
      apellido: "Perez",
      edad: 25,
      hobbies: ["correr", "saltar", "dormir"],
      direccion: {
        direccion_antigua: {
          calle: "calle 1",
          numero: 1,
          barrio: "barrio 1",
        },
        direccion_actual: {
          calle: "calle 2",
          numero: 2,
          barrio: "barrio 2",
        },
      },
    },
    {
      nombre: "Maria",
      apellido: "Lopez",
      edad: 30,
      hobbies: ["correr", "saltar", "dormir"],
      direccion: {
        direccion_antigua: {
          calle: "calle 3",
          numero: 3,
          barrio: "barrio 3",
        },
        direccion_actual: {
          calle: "calle 4",
          numero: 4,
          barrio: "barrio 4",
        },
      },
    },
    {
      nombre: "Pedro",
      apellido: "Martinez",
      edad: 35,
      hobbies: ["correr", "saltar", "dormir"],
      direccion: {
        direccion_antigua: {
          calle: "calle 5",
          numero: 5,
          barrio: "barrio 5",
        },
        direccion_actual: {
          calle: "calle 6",
          numero: 6,
          barrio: "barrio 6",
        },
      },
    },
  ]

  Ejercicio 1:
  Imprimir en consola el nombre de todas las personas
  Ejercicio 2:
  Imprimir en consola todos los hobbies de todas las personas
  Ejercicio 3:
  Imprimir en consola todas las direcciones de todas las personas
  Ejercicio 4:
  Imprimir en consola la direccion actual de todas las personas
  Ejercicio 5:
  Imprimir en consola la direccion antigua de todas las personas

  Nota:
  Realizarlo con for of y for in y si lo deseas con for
*/

const lista_personas = [
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    hobbies: ["correr", "saltar", "dormir"],
    direccion: {
      direccion_antigua: {
        calle: "calle 1",
        numero: 1,
        barrio: "barrio 1",
      },
      direccion_actual: {
        calle: "calle 2",
        numero: 2,
        barrio: "barrio 2",
      },
    },
  },
  {
    nombre: "Maria",
    apellido: "Lopez",
    edad: 30,
    hobbies: ["correr", "saltar", "dormir"],
    direccion: {
      direccion_antigua: {
        calle: "calle 3",
        numero: 3,
        barrio: "barrio 3",
      },
      direccion_actual: {
        calle: "calle 4",
        numero: 4,
        barrio: "barrio 4",
      },
    },
  },
  {
    nombre: "Pedro",
    apellido: "Martinez",
    edad: 35,
    hobbies: ["correr", "saltar", "dormir"],
    direccion: {
      direccion_antigua: {
        calle: "calle 5",
        numero: 5,
        barrio: "barrio 5",
      },
      direccion_actual: {
        calle: "calle 6",
        numero: 6,
        barrio: "barrio 6",
      },
    },
  },
]