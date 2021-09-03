//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import pokemon from "../data/pokemon/pokemon.js";
import { suffle, cardContainer, button, duplicateData } from "../utils.js";

const pokemonData = pokemon.items;
const arrayDuplicate = duplicateData(pokemonData)


export const App = () => {
  const container = document.createElement("div");
  container.id = "container";
  container.appendChild(button())
  const revolverData = suffle(arrayDuplicate)
  container.appendChild(cardContainer(revolverData)) 

  //mostrarTarjetas(revolverData).forEach(card=>container.appendChild(card))
 
  return container
  };
















/* 
//Lamar la data
// const pokemonData = pokemon.items
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
export const cardContainer = () => {
  const container = document.createElement("div")
  duplicateData.forEach(function(card){
    container.appendChild(carta(card))
  });
  return container

}
 
 */