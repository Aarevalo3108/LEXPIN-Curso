
/*
  Funciones asociada a document
  document.getElementById("id") -> Selector de elementos por id
  document.getElementsByClassName("class") -> Selector de elementos por clase (Devuelve un arreglo)
  document.getElementsByTagName("etiqueta") -> Selector de elementos por etiqueta (Devuelve un arreglo)
  document.querySelector("selector") -> Selector de elementos por cualquier selector de css
  document.querySelectorAll("selector") -> Selector de elementos por cualquier selector de css (Devuelve un arreglo)
  document.createElement("etiqueta") -> Crea un elemento html
  document.removeChild(elemento) -> Elimina un elemento html
  document.appendChild(elemento) -> Agrega un elemento html como hijo
  document.replaceChild(elemento, elemento) -> Reemplaza un elemento por otro
  document.getElementById("id").innerHTML -> Obtiene el contenido html de un elemento
  document.getElementById("id").value = "valor" -> Asigna un valor a un elemento
*/

/*
  Ejercicios
  1. Crear un juego de piedra, papel o tijera
  2. Crea un TODO list donde puedra agregar tareas y eliminarlas
  3. Crea un cuadro que al presionar las flechas del teclado se mueva
  4. Crea una calculadora que sume, reste, multiplique y divida dos numeros

  Ejercicios avanzados
  1. Crea un juego de memoria
  2. Crea una calculadora que sume, reste, multiplique, divida, eleve a la potencia y saque la raiz cuadrada de cualquier cantidad de numeros
  3. Crea el juego de snake
  4. Crea el juego de la vieja

  Fecha de entrega: 08/02/24

*/

// 1. Crear un juego de piedra, papel o tijera
const PPTimagen = ["✊","📃","✂️"];
const section1 = document.createElement('section');
const section2 = document.createElement('section');
const section3 = document.createElement('section');
const pantalla = [document.createElement('p'),document.createElement('p')];
const mensaje = document.createElement('p');
const main = document.getElementById('main');
function Game1(){
  while (section1.hasChildNodes()) {
    section1.removeChild(section1.firstChild);
  }
  while (section2.hasChildNodes()) {
    section2.removeChild(section2.firstChild);
  }
  while (section3.hasChildNodes()) {
    section3.removeChild(section3.firstChild);
  }
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
  main.classList.add("gap-12");
  const botones = [document.createElement('button'),document.createElement('button'),document.createElement('button')];
  const op = ["Piedra","Papel","Tijera"];
  const color = ["bg-gray-700","bg-gray-200","bg-red-600"];
  main.appendChild(section1);
  section1.classList.add("flex", "gap-4")
  for(i = 0; i<3; i++){
    botones[i].innerText = op[i];
    botones[i].classList.add("p-4","active:translate-y-1","rounded-xl",color[i]);
    botones[i].setAttribute("onclick",`Game1Option(${i})`)
    section1.appendChild(botones[i]);
  }
  section2.classList.add("flex","gap-8")
  main.appendChild(section2);
  for(i=0;i<2;i++){
    pantalla[i].innerText = "";
    pantalla[i].classList.add("h-32","w-32","text-[5.5rem]","flex","justify-center","items-center");
    section2.appendChild(pantalla[i]);
    if(i==0){
      vs = document.createElement('p');
      vs.classList.add("h-32","w-32","text-[5.5rem]","flex","justify-center","items-center");
      vs.innerText = "vs"
      section2.appendChild(vs);
    }
  }
  section3.classList.add("h-12");
  main.appendChild(section3);
  mensaje.classList.add("text-xl","rounded-xl","p-4");
}
function Game1Option(jugador){
  while (section3.hasChildNodes()) {
    section3.removeChild(section3.firstChild);
  }
  mensaje.classList.remove("bg-green-500","bg-gray-500","bg-orange-500");
  let bot = Math.floor(Math.random() * 3);
  pantalla[0].innerText = PPTimagen[jugador];
  pantalla[1].innerText = PPTimagen[bot];
  if(bot == jugador){
    mensaje.innerText = "Empate!";
    mensaje.classList.add("bg-gray-500");
  } else if((bot == 0 && jugador == 1) || (bot == 1 && jugador == 2) || (bot == 2 && jugador == 0)){
    mensaje.innerText = "Ganaste!";
    mensaje.classList.add("bg-green-500");
  }
  else{
    mensaje.innerText = "Perdiste!";
    mensaje.classList.add("bg-orange-500");
  }
  section3.appendChild(mensaje);
}

//  2. Crea un TODO list donde puedra agregar tareas y eliminarlas
function Game2(){
  while (section1.hasChildNodes()) {
    section1.removeChild(section1.firstChild);
  }
  while (section2.hasChildNodes()) {
    section2.removeChild(section2.firstChild);
  }
  while (section3.hasChildNodes()) {
    section3.removeChild(section3.firstChild);
  }
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
}

//  3. Crea un cuadro que al presionar las flechas del teclado se mueva
function Game3(){
  while (section1.hasChildNodes()) {
    section1.removeChild(section1.firstChild);
  }
  while (section2.hasChildNodes()) {
    section2.removeChild(section2.firstChild);
  }
  while (section3.hasChildNodes()) {
    section3.removeChild(section3.firstChild);
  }
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
}
//  4. Crea una calculadora que sume, reste, multiplique y divida dos numeros
function Game4(){
  while (section1.hasChildNodes()) {
    section1.removeChild(section1.firstChild);
  }
  while (section2.hasChildNodes()) {
    section2.removeChild(section2.firstChild);
  }
  while (section3.hasChildNodes()) {
    section3.removeChild(section3.firstChild);
  }
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
}
//  5. Crea un juego de memoria
function Game5(){
  while (section1.hasChildNodes()) {
    section1.removeChild(section1.firstChild);
  }
  while (section2.hasChildNodes()) {
    section2.removeChild(section2.firstChild);
  }
  while (section3.hasChildNodes()) {
    section3.removeChild(section3.firstChild);
  }
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
}
//2. Crea una calculadora que sume, reste, multiplique, divida, eleve a la potencia y saque la raiz cuadrada de cualquier cantidad de numeros
function Game6(){
  while (section1.hasChildNodes()) {
    section1.removeChild(section1.firstChild);
  }
  while (section2.hasChildNodes()) {
    section2.removeChild(section2.firstChild);
  }
  while (section3.hasChildNodes()) {
    section3.removeChild(section3.firstChild);
  }
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
}
function Game7(){
  while (section1.hasChildNodes()) {
    section1.removeChild(section1.firstChild);
  }
  while (section2.hasChildNodes()) {
    section2.removeChild(section2.firstChild);
  }
  while (section3.hasChildNodes()) {
    section3.removeChild(section3.firstChild);
  }
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
}
function Game8(){
  while (section1.hasChildNodes()) {
    section1.removeChild(section1.firstChild);
  }
  while (section2.hasChildNodes()) {
    section2.removeChild(section2.firstChild);
  }
  while (section3.hasChildNodes()) {
    section3.removeChild(section3.firstChild);
  }
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
}