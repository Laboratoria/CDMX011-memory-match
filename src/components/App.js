
//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import pokemon from '../data/pokemon/pokemon.js';
 //console.log(pokemon);
 const dataPokemon=pokemon.items;
 const dataDuplicate=dataPokemon.concat(dataPokemon)
 //console.log(dataPokemon);

export const App = () => {
  const cartaPokemon = document.createElement ('div');
  cartaPokemon.id = 'cardsId';
  cartaPokemon.className= "containerCards";
  dataDuplicate.forEach(function(tarjeta){
    const divContenedor = document.createElement ('div');
    const imgPokemon = document.createElement('img');
    divContenedor.className= "imgcard";
    imgPokemon.src=tarjeta.image;
    divContenedor.appendChild(imgPokemon)
    cartaPokemon.appendChild(divContenedor);
  })
  return cartaPokemon
  
};

export function random (array) {
  let currentIndex = array.length,  randomIndex;
  
  // While there remain elements to shuffle...
  while (currentIndex != 0) {
      //console.log(Math.floor(Math.random() * currentIndex))

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

 
}
random (dataDuplicate);



 /*function duplicate() {
  const duplicateDiv=document.getElementById("cardsId");
  const duplicate= duplicateDiv.cloneNode(true);
  document.getElementById("cardsId").appendChild(duplicate);
  
} */
  



/*function myFunction () {
  const elmnt = document.querySelectorAll(".card");
  const clone = elmnt.cloneNode(true);
  rootDiv.appendChild(clone);
}
myFunction()*/
