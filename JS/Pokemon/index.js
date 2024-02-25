/*Consume API of Pokemon*/

const getPokemon = async (urlBase = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20",searchData = false) => {
  if(searchData){
    if(document.getElementById("search").value > 0 && document.getElementById("search").value <= 1302){
      urlBase = `https://pokeapi.co/api/v2/pokemon?offset=${document.getElementById("search").value-1}&limit=20`;
    } else{
      alert("ingrese un numero valido.")
      return 0;
    }
  }
  while (document.getElementById("list").hasChildNodes()) {
    document.getElementById("list").removeChild(document.getElementById("list").firstChild);
  }
  document.getElementById("search").value = "";
  try {
    const response = await fetch(urlBase);
    const data = await response.json();
    if(data.next == null){
      document.getElementById("next").setAttribute("onclick",`getPokemon()`)
      document.getElementById("next").disabled = true;
    }else{
      document.getElementById("next").setAttribute("onclick",`getPokemon("${data.next}")`)
      document.getElementById("next").disabled = false;
    }
    if(data.previous == null){
      document.getElementById("prev").setAttribute("onclick",`getPokemon()`)
      document.getElementById("prev").disabled = true;
    }else{
      document.getElementById("prev").setAttribute("onclick",`getPokemon("${data.previous}")`)
      document.getElementById("prev").disabled = false;
    }
    //Introduce pokemons in the HTML
    data.results.map(async (pokemon) => {
      const div_pokemon = document.createElement("div");
      if(div_pokemon.classList.value == ""){
        div_pokemon.classList.add(
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
        }
      const poke = await fetch(pokemon.url);
      const dataPoke = await poke.json();
      let IMG;
      if(dataPoke.sprites.other["official-artwork"].front_default != null){
        IMG = dataPoke.sprites.other["official-artwork"].front_default;
      }
      else{
        IMG = dataPoke.sprites.front_default;
      }
      div_pokemon.innerHTML = `<p class="capitalize text-lg">#${dataPoke.id} ${pokemon.name}</p><img class="h-[158px] w-[158px]" draggable="false" src="${IMG}"></img>`;
      const TYPES = document.createElement("div");
      TYPES.classList.add(
        "flex",
        "gap-2"
      )
      TYPES.innerHTML = ""
      for(let X of dataPoke.types){
        TYPES.innerHTML += `<img class="w-[75px] h-[14px]" draggable="false" src="./src/img/${X.type.name}.png"></img>`
      }
      div_pokemon.appendChild(TYPES);
      document.getElementById("list").appendChild(div_pokemon);

    });
  } catch (error) {
    console.error(error);
  }
}

getPokemon();


/*
  Mejorar el codigo para agregar la imagen de cada pokemon y el tipo

  Opcional: Crear una paginación para mostrar los pokemones de 20 en 20 hasta el final de la lista
*/