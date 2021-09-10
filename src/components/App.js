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
  let firstSelection = null;
  let secondSelection = null;

  divDadPokemon.className= "divContainerCards";
  dataDuplicate.forEach(function(tarjeta){
    const divContenedorCard = document.createElement ('div');
    divContenedorCard.className= "divImgCard";
    divContenedorCard.dataset.id = tarjeta.id;
    console.log('debug 1', tarjeta)
    divContenedorCard.addEventListener('click', conteo);      
    
    function conteo(e){
      console.log('clicked')
      const id = e.currentTarget.dataset.id;
      
      
      if(firstSelection !== null) {
        secondSelection = id
        
        if (firstSelection === secondSelection) {
          alert('iguales')
        }
        
        firstSelection = null;
        secondSelection = null;
      } else {
        
        firstSelection = id;
      }


      //const optionOneId = cardsChosenId[0]
      //const optionTwoId = cardsChosenId[1]
        /*
      let firstclick = [];
      Let secondclick= [];*/

      //generar 2 variables que almacena el 1º click y otra el 2º click, ambos vacios
      // registrar su valor o contenido 2( ID o tarjet)
      // hacer score
      // comparar valores (condicional )
      //sume puntos


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
