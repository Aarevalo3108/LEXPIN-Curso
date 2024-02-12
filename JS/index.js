let miArray = [1,2,3,4,5,6,7,8,9,10];

miArray.map(function (num,indice,algo,algo2){
  console.log(`${miArray[indice] = num * 2}`)
});


let mezcla = [1,2,"3","cuatro",5,"6",7,"8","9",10,"once"]
let enteros = []
let strings = []
mezcla.map(function (elemento) {
  typeof elemento === "string"
  ? strings.push(elemento)
  : enteros.push(elemento)
});
console.log(`enteros: ${enteros}`)
console.log(`strings: ${strings}`)


// funcion tradicional
function saludar(){
  console.log("hola!");
}

// Funcion de raya
const saludarArrow = () => {
  console.log("Hola!")
}

function multiplicar(x){
  return x*2
}
console.log(12);
console.log(multiplicar(12));

// funcion de raya

let multi = (x) => x*x
console.log(multi(120))
