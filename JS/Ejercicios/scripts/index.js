
// 1. Crear un juego de piedra, papel o tijera
const PPTimagen = ["✊","📃","✂️"];
const section1 = document.createElement('section');
const section2 = document.createElement('section');
const section3 = document.createElement('section');
const pantalla = [document.createElement('p'),document.createElement('p')];
const mensaje = document.createElement('p');
const main = document.getElementById('main');
function Game1(){
  inicial();
  main.classList.add("gap-12");
  const botones = [document.createElement('button'),document.createElement('button'),document.createElement('button')];
  const op = ["Piedra","Papel","Tijera"];
  const color = ["bg-gray-700","bg-gray-200","bg-red-600"];
  main.appendChild(section1);
  section1.classList.add("flex", "gap-4");
  for(i = 0; i<3; i++){
    botones[i].innerText = op[i];
    botones[i].classList.add("p-4","active:translate-y-1","rounded-xl",color[i]);
    botones[i].setAttribute("onclick",`Game1Option(${i})`)
    section1.appendChild(botones[i]);
  }
  section2.classList.add("flex","gap-8");
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
let index;
function Game2(){
  inicial();
  section1.classList.add("flex","flex-col","items-center","border-solid","border-2","border-gray-400","bg-gray-900","h-[500px]","w-[500px]","rounded-xl","p-4","overflow-auto");
  main.appendChild(section1);
  const contenedorBarra = document.createElement('form')
  const barra = document.createElement('input')
  const bSubmit = document.createElement('input');
  const listaTareas = document.createElement('ul')
  
  contenedorBarra.classList.add("flex","w-full","items-center","justify-center","gap-4");
  barra.classList.add("w-4/5","h-8","p-2","border-b-2","border-gray-400","focus:border-white","bg-transparent","text-white","focus:outline-0");
  bSubmit.classList.add("w-8","h-8","bg-green-500","active:translate-y-1","rounded-md")
  listaTareas.classList.add("flex","flex-col","gap-2","items-center","w-full","py-4","px-2")
  
  contenedorBarra.setAttribute('id','barra');
  contenedorBarra.setAttribute('onsubmit','Agregar();return false;');
  barra.setAttribute('type','text');
  barra.setAttribute('placeholder',"Ejm: Darle comida al perro.")
  bSubmit.setAttribute('type','button')
  bSubmit.setAttribute("onclick",`Agregar()`)
  bSubmit.value = "+"
  listaTareas.setAttribute('id','listaTareas')
  
  section1.appendChild(contenedorBarra);
  contenedorBarra.appendChild(barra);
  contenedorBarra.appendChild(bSubmit);
  section1.appendChild(listaTareas);
}

const Agregar = () =>{
  const contenido = document.getElementById("barra");
  const lista = document.getElementById('listaTareas')
  if(contenido.firstChild.value){
    index = lista.childElementCount;
    texto = contenido.firstChild.value
    contenido.reset();
    const tarea = document.createElement('li');
    const check = document.createElement('input')
    const textoTarea = document.createElement('input');
    const close = document.createElement('input');
    const Lista = document.getElementById("listaTareas");
    
    tarea.classList.add('flex','items-center','justify-between','text-white','gap-4','w-4/5','px-4','rounded-lg');
    check.classList.add('w-5','h-5','rounded-xl');
    textoTarea.classList.add('rounded-lg','px-4','bg-orange-900','w-full');
    close.classList.add('rounded-full','bg-red-900','w-[26px]','active:translate-y-1');
    
    check.setAttribute('type','checkbox');
    check.setAttribute('id',`Check${index}`);
    check.setAttribute('onchange',`Hecho(${index})`);
    textoTarea.setAttribute('type','text');
    textoTarea.setAttribute('value',texto);
    textoTarea.setAttribute('id',`Tarea${index}`);
    textoTarea.disabled = true;
    close.setAttribute('type','button');
    close.setAttribute('value','X');
    close.setAttribute('id',`Elemento${index}`);
    close.setAttribute('onclick',`Borrar(${index})`);
    
    tarea.appendChild(check);
    tarea.appendChild(textoTarea);
    tarea.appendChild(close);
    Lista.appendChild(tarea);
  } else {alert('ingrese un texto por favor')}
}

const Borrar = (index) => {
  const lista = document.getElementById('listaTareas')
  if (lista.hasChildNodes()) {
    lista.removeChild(lista.children[index]);
    let element;
    let check;
    let tarea;
    for (let i=index;i<lista.childElementCount;i++){
      check = document.getElementById(`Check${i+1}`);
      check.setAttribute('id',`Check${i}`);
      check.setAttribute('onchange',`Hecho(${i})`);
      tarea = document.getElementById(`Tarea${i+1}`)
      tarea.setAttribute('id',`Tarea${i}`);
      element = document.getElementById(`Elemento${i+1}`);
      element.setAttribute('id',`Elemento${i}`);
      element.setAttribute('onclick',`Borrar(${i})`);
    }
  }
}

const Hecho = (index) => {
  const tarea = document.getElementById(`Tarea${index}`);
  tarea.classList.toggle('bg-green-900');
}


//  3. Crea un cuadro que al presionar las flechas del teclado se mueva
function Game3(){
  inicial();
}
//  4. Crea una calculadora que sume, reste, multiplique y divida dos numeros
function Game4(){
  inicial();
}
//  5. Crea un juego de memoria
function Game5(){
  inicial();
}
//  6. Crea una calculadora que sume, reste, multiplique, divida, eleve a la potencia y saque la raiz cuadrada de cualquier cantidad de numeros
function Game6(){
  inicial();
}
//  7. Crea el juego de snake
function Game7(){
  inicial();
}
//  8. Crea el juego de la vieja
function Game8(){
  inicial();
}

const inicial = () => {
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
  section1.classList.remove("flex","flex-col","items-center","border-solid","border-2","border-gray-400","bg-gray-900","h-[500px]","w-[500px]","rounded-xl","p-4","overflow-auto");
  section2.classList.remove("flex","gap-8");
  section3.classList.remove("h-12");
}