
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
  const divDadPokemon = document.createElement ('div');
  divDadPokemon.id = 'cardsId';
  divDadPokemon.className= "divContainerCards";
  dataDuplicate.forEach(function(tarjeta){
    const divContenedorCard = document.createElement ('div');
    divContenedorCard.className= "divImgCard";
    divContenedorCard.id=tarjeta.id;
    divContenedorCard.addEventListener('click', conteo);      
      function conteo(e){
    alert('ha sido seleccionado');
      var element=e.currentTarget.id;
      console.log(element)


    } 
    const imgPokemon = document.createElement('img');
   
    imgPokemon.src=tarjeta.image;
    divContenedorCard.appendChild(imgPokemon)
    divDadPokemon.appendChild(divContenedorCard);
  })
  return divDadPokemon  
};

/*clickAction.addEventListener('click',  myFunction);
function myFunction(event) {
  console.log(event)
}*/


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

 return array;
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
