//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import pokemon from '../data/pokemon/pokemon.js';
 /*console.log(pokemon);*/
 const dataPokemon = pokemon.items;

 const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = 'Hola mundo!';
  el.appendChild(imagenIndependiente());
  return el;
};

export const cardPokemon = (tarjeta)  => {
  const imgPokemon = document.createElement('div')
  const imgPokemon = document.createElement('img');
  imgPokemon.src = tarjeta.image;
  //console.log(elementDiv);
  elementDiv.appendChild(imgPokemon)
  return elementDiv
}

export const imagenIndependiente = () => {
 const divImagenes = document.createElement ('div');
 dataPokemon.forEach(function(tarjeta){
   divImagenes.appendChild(cardPokemon(tarjeta));
 });
 return divImagenes

}