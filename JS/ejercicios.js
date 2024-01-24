
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
  /*
  Ejercicios 8:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola la suma de todos los elementos del arreglo
*/
  /*
  Ejercicios 9:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola el promedio de todos los elementos del arreglo
*/
  /*
  Ejercicios 10:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola el numero mayor del arreglo
*/
  /*
  Ejercicios 11:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola el numero menor del arreglo
*/
  /*
  Ejercicios 12:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola los numeros pares del arreglo
*/
  /*
  Ejercicios 13:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola los numeros impares del arreglo
*/
  /*
  Ejercicios 14:
  Crear una funcion que reciba como parametro un arreglo de frutas
  e imprima el nombre de la fruta mas larga*/

