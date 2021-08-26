//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import pokemon from '../data/pokemon/pokemon.js';
// eslint-disable-next-line no-console
//console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//

// eslint-disable-next-line no-console
const pokemonData = pokemon.items

//Duplicar data
const duplicate = pokemonData.concat(pokemonData)
export const App = () => {
  const container = document.createElement('div')
  container.id ="container"

  duplicate.forEach(item =>{
  const card = document.createElement("div")
  card.setAttribute("id","cards")

  const imagen= document.createElement("img")
   imagen.src= item.image
   card.appendChild(imagen)

   const name = document.createElement("h3")
   name.textContent =item.id
   card.appendChild(name)

   container.appendChild(card)
 
})

// eslint-disable-next-line no-undef
return container
}


 
//Aqui pa bajo si funciona

/* const pokemonData = pokemon.items
export const App = () => {
  let container= document.createElement('div');
  //container.id ="container"
  container.setAttribute("id","container")
  container.appendChild(cardContainer())

  return container;
};
 

//mostrar imagenes
const carta= (card) => {
  const cards = document.createElement("div")
  cards.setAttribute("id","cards")
  //cards.id="cards"
  const imagenPokemon = document.createElement("img")
  imagenPokemon.src= card.image;
  cards.appendChild(imagenPokemon) 
  const nombre = document.createElement("h3")
  nombre.textContent = card.id
  cards.appendChild(nombre)
 
 
//cards.insertBefore(imagenPokemon, text)
  return cards
};

//Separar cada imagen 
const cardContainer = () => {
  const container = document.createElement("div")
  pokemonData.forEach(function(card){
    container.appendChild(carta(card))
  });
  return container

}
 */
  