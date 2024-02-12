// import {paises, ciudades} from "./constants"

const paises = [
  {id: 1, nombre: 'Argentina'},
  {id: 2, nombre: 'Brasil'},
  {id: 3, nombre: 'Chile'},
  {id: 4, nombre: 'Colombia'},
  {id: 5, nombre: 'Ecuador'},
];

const ciudades = [
  {id: 1, nombre: 'Buenos Aires', pais_id: 1},
  {id: 2, nombre: 'Cordoba', pais_id: 1},
  {id: 3, nombre: 'Rosario', pais_id: 1},
  {id: 4, nombre: 'Sao Paulo', pais_id: 2},
  {id: 5, nombre: 'Rio de Janeiro', pais_id: 2},
  {id: 6, nombre: 'Brasilia', pais_id: 2},
  {id: 7, nombre: 'Santiago', pais_id: 3},
  {id: 8, nombre: 'Valparaiso', pais_id: 3},
  {id: 9, nombre: 'Concepcion', pais_id: 3},
  {id: 10, nombre: 'Bogota', pais_id: 4},
  {id: 11, nombre: 'Medellin', pais_id: 4},
  {id: 12, nombre: 'Cali', pais_id: 4},
  {id: 13, nombre: 'Quito', pais_id: 5},
  {id: 14, nombre: 'Guayaquil', pais_id: 5},
  {id: 15, nombre: 'Cuenca', pais_id: 5},
];

/*paises.map(
  (pais) => console.log(pais.nombre)
)*/

paises.map((pais) => {
  console.log(`Pais: ${pais.nombre}`);
  ciudades.map((ciudad) => {
    if (ciudad.pais_id === pais.id){
      console.log(`  Ciudad: ${ciudad.nombre}`)
    }
  })
})

// Spread operator
paises = [...paises, {id: 6, nombre: "Mexico"}];

// Censurar todas las malas palabras de un texto

const malasPalabras = ["chispitas","centellas","caracolas","rayos","recorcholis"];
let texto = "Diablos viejo, esto es un infierno de chispitas y caracolas, chispitas, CHISPITAS, ch1sp1tas";

/*
malasPalabras.map((palabra) =>{
  texto = texto.replace(palabra,"*****");
});
*/
malasPalabras.map((palabra) =>{
  while (texto.includes(palabra)){
    texto = texto.replace(palabra,"*****");
  }
});

console.log(texto);

/*

  Mejora este ejercicio para que no importe si las malas palabras estan en mayusculas o minusculas
  (utilizando expresiones regulares)

  Nota: Si quieres hacer algo avanzado, puedes buscar un patron de cada mala palabra
  (para que se censure cosas como "chispitas" o "ch!sp!tas" o "chispitas" con tildes)

*/

/*

  regex (regular expresion) o expresiones regulares
  Son patrones que se utilizan para validar texto, buscar texto, reemplazar texto, etc.

*/

// Ejemplo de expresion regular
const regex = /chispitas/gi;
console.log(texto.replace(regex,"*****"))

// Ejemplo de expresion regular para validar un nombre
const nombre = "Juan";
const regexNombre = /^[a-zA-Z]+$/;
// ^: Inicio del string
// [a-zA-Z]: Cualquier letra mayuscula o minuscula
// +: Uno o mas caracteres
// $: fin del string
console.log(regexNombre.test(nombre)); //true

// Ejemplo de expresion regular para validar un email
const email = "hola@hola.com.ve"
const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
// ^: Inicio del string
// [a-zA-Z0-9._-]: Cualquier letra, numero, punto, guion bajo o guion
// +: Uno o mas caracteres
// @: Caracter arroba
// [a-zA-Z0-9.-]: Cualquier letra, numero, punto o guion
// +: Uno o mas caracteres
// \.: Caracter punto escapado
// [a-zA-Z]: Cualquier letra
// {2,6}: Entre 2 y 6 caracteres
// $: Fin del string
console.log(regexEmail.test(email)); //true


// Ejemplo de expresión regular para validar un número de teléfono
const telefono = "+58412-1234567";
const regexTelefono = /^.\d{4,6}-\d{7}$/;
// ^: Inicio del string
// \d: Cualquier dígito
// {4}: 4 dígitos
// -: Caracter guión
// \d: Cualquier dígito
// {7}: 7 dígitos
// $: Fin del string
console.log(regexTelefono.test(telefono)); // true

/*
  Crea un formulario de registro con los siguientes campos:
  - Nombre
  - Apellido
  - Email
  - Teléfono
  - Contraseña
  - Confirmar contraseña
  - Botón de enviar

  Valida que todos los campos estén llenos y que todos los campos esten correctamente llenados,
  Ademas debes tener en cuenta que una contraseña (Para este sistema) debe tener al menos
  - 1 letra en mayuscula
  - 1 letra en minuscula
  - 1 caracter especial (!.*_-)
  - 1 numero
  - 8 caracteres como mínimo
  - No puede contener espacios

  Si algún campo no está lleno o no está correctamente llenado, debes mostrar un mensaje de error
  El formulario debe ser responsive además de tener un diseño agradable.
  
*/

