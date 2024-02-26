/*Consume API of Pokemon*/

const urlAPI = "https://pokeapi.co/api/v2/pokemon"

const getPokemon = async (urlBase = `${urlAPI}?offset=0&limit=20`,searchData = false) => {
  // condicional para comprobar que el numero del pokemon ingresado se valido
  if(searchData){
    if(document.getElementById("search").value > 0 && document.getElementById("search").value <= 1302){
      urlBase = `${urlAPI}?offset=${document.getElementById("search").value-1}&limit=20`;
    } else{
      alert("ingrese un numero valido.");
      return 0;
    }
  }
  // ciclo para borrar elementos dentro del div lista
  while (document.getElementById("list").hasChildNodes()) {
    document.getElementById("list").removeChild(document.getElementById("list").firstChild);
  }
  document.getElementById("search").value = "";
  try {
    const response = await fetch(urlBase);
    const data = await response.json();
    // Condicionales para agregar las urls correspondientes en los botones next y prev
    if(data.next == null){
      document.getElementById("next").setAttribute("onclick",`getPokemon()`);
      document.getElementById("next").disabled = true;
    }else{
      document.getElementById("next").setAttribute("onclick",`getPokemon("${data.next}")`);
      document.getElementById("next").disabled = false;
    }
    if(data.previous == null){
      document.getElementById("prev").setAttribute("onclick",`getPokemon()`);
      document.getElementById("prev").disabled = true;
    }else{
      document.getElementById("prev").setAttribute("onclick",`getPokemon("${data.previous}")`);
      document.getElementById("prev").disabled = false;
    }
    let i = 1;
    // ciclo para agregar contenido a cada contenedor pokemon
    data.results.map(async (pokemon) => {
      const div_pokemon = document.createElement("div");
      // condicional para comprobar si no tiene estilos (luego de inicializar)
      if(div_pokemon.classList.value == ""){
        div_pokemon.classList.add(
          `order-[${i}]`,
          "flex",
          "flex-col",
          "gap-4",
          "w-fit",
          "justify-center",
          "items-center",
          "p-8",
          "bg-gray-200",
          "drop-shadow-lg",
          "m-2",
          "rounded-lg",
          "shadow-md",
          "text-center"
          );
          i++;
      }
      const poke = await fetch(pokemon.url);
      const dataPoke = await poke.json();
      let IMG = [];
      // condicional para mostrar la imagen del artwork oficial, si no tiene, se muestra el sprite base (hay algunos pokemons que no tiene imagenes)
      if(dataPoke.sprites.other["official-artwork"].front_default != null){
        IMG[0] = dataPoke.sprites.other["official-artwork"].front_default;
        IMG[1] = dataPoke.sprites.other["official-artwork"].front_shiny;
      }else{
        IMG[0] = dataPoke.sprites.front_default;
        IMG[1] = dataPoke.sprites.front_shiny;
      }
      div_pokemon.innerHTML = `<p class="capitalize text-lg">#${dataPoke.id} ${pokemon.name}</p><img id="n${dataPoke.id}" class="h-[158px] w-[158px] active:scale-110 cursor-pointer" draggable="false" onclick="showShiny(${dataPoke.id})" src="${IMG[0]}"></img>`;
      const TYPES = document.createElement("div");
      TYPES.classList.add("flex","gap-2");
      TYPES.innerHTML = "";
      // agregar los tipos que coincidan con el type.name con imagenes almacenadas localmente
      for(let X of dataPoke.types){
        TYPES.innerHTML += `<img class="w-[75px] h-[14px]" draggable="false" src="./src/img/${X.type.name}.png"></img>`;
      }
      div_pokemon.appendChild(TYPES);
      document.getElementById("list").appendChild(div_pokemon);
    });
  } catch (error) {
    console.error(error);
  }
}

const showShiny = async (index) =>{
  // Cambiar entre imagen shiny y default
  const data = await fetch(`${urlAPI}/${index}/`);
  const pokemon = await data.json();
  console.log(pokemon);
  if(document.getElementById(`n${index}`).getAttributeNode("src").value == pokemon.sprites.other["official-artwork"].front_default){
    document.getElementById(`n${index}`).getAttributeNode("src").value = pokemon.sprites.other["official-artwork"].front_shiny;
  }else{
    document.getElementById(`n${index}`).getAttributeNode("src").value = pokemon.sprites.other["official-artwork"].front_default;
  }
};

getPokemon();