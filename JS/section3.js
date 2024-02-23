// Try Catch


// Ejemplo 1
try{
  let x = 10;
  let y = 0;
  if (!y){
    throw `No se puede dividir entre 0`;
  }
  console.log(x/y);
}catch(error){
  console.error(error);
}

// Ejemplo 2


/*

  ASINCRONISMO
  EL asincronismo es una caracteristica de JavaScript que nos permite ejecutr codigo
  sin necesidad de esperar a que se ejecute una linea de codigo.

*/

// setInterval
/*

  La funcion setInterval nos permite ejecutar una funcion 
  cada cierto tiempo

*/

// Ejemplo 1

setInterval(() => {
  console.log('Hola cada segundo');
},1000);

// setTimeout
/*

  La funcion setTimeout nos permite ejecutar una funcion 
  despues de cierto tiempo

*/

// Ejemplo 1
setTimeout(() => {
  console.log('Hola despues de 1 segundo');
},1000);

// Callback
/*

  Un callback es una funcion que se pasa como argumento a otra funcion.

*/

// Promesas
/*

  Las promesas son una forma de trabajar con codigo asincrono
  de una manera mas sencilla.

*/

// Ejemplo 1
let promesa1 = new Promise((resolve, reject) => {
  try{
    setTimeout(() =>{
      resolve("Se ejecuto la promesa");
    },1000);
  } catch(error){
    setTimeout(() => {
      reject("No se ejecuto la promesa");
    },2000)
  }
});

promesa1
  .then((response) => {
    console.log(response)
  })
  .catch((reject) => {
    reject.log(reject)
  });

/*

  Async Await
  el async await es una forma de trabajar con pomesas
  de una manera mas sencilla

*/

// Ejemplo 1
async function promesa(){
  try{
    let response = await Promise((resolve) => {
      setTimeout(() =>{
        resolve("Se ejecuto la promesa");
      },1000);
    });
    console.log(response);
  }catch(error){
    console.error(error)
  }
}

