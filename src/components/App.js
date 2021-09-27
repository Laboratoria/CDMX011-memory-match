//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import pokemon from '../data/pokemon/pokemon.js';
 //console.log(pokemon);
 const dataPokemon=pokemon.items;
 const dataDuplicate=dataPokemon.concat(dataPokemon);
 //console.log(dataPokemon);
 const scoreCard= document.querySelector('.score');


 const resetGame=document.getElementById('resetPoke');


 
export const App = () => {
  
  //generar 2 variables que almacena el 1º click y otra el 2º click, ambos vacios
  let firstSelection = null;
  let secondSelection = null;
  // hacer score
  let score = 0;


  const divDadPokemon = document.createElement ('div');
  divDadPokemon.className= "divContainer";
  
  dataDuplicate.forEach(function(tarjeta){
    const cardsTwoDiv=document.createElement ('div');
    cardsTwoDiv.className="divContainerCards"

    const divContCardFront = document.createElement ('div');
    divContCardFront.className= `divImgCardFront ${tarjeta.id}`;
    divContCardFront.dataset.id = tarjeta.id;
    console.log('debug 1', tarjeta)
    const imgPokemonFront = document.createElement('img');   
    imgPokemonFront.src=tarjeta.image;
    imgPokemonFront.className="front";

    const divContCardBack = document.createElement ('div');
    divContCardBack.className= "divImgCardBack"; 
    const imgPokemonBack = document.createElement('img');
    imgPokemonBack.src='data/img/backimg.jpg';
    imgPokemonBack.className='back';      


    divContCardFront.append(imgPokemonFront);    
    divContCardBack.append(imgPokemonBack);

    cardsTwoDiv.append(divContCardFront);
    cardsTwoDiv.append(divContCardBack);

    divDadPokemon.append(cardsTwoDiv)



    //selecciòn de tarjetas
    divContCardFront.addEventListener('click', conteo);    
    function conteo(e){
      console.log('debug 2' , e.currentTarget);
      //console.log('clicked');
      const eCurtTarg=e.currentTarget;
      const id = eCurtTarg.dataset.id; 
     
      /*if(eCurtTarg.className==="divImgCardBack") {
        eCurtTarg.style.transform="rotateY(180deg)";
        eCurtTarg.style.transition="1s";
      }   */
      
      if(firstSelection !== null) {
        secondSelection = id
       
        console.log('debug 3', firstSelection);
        console.log('debug 4', secondSelection);
        // comparar valores (condicional )
        if (firstSelection === secondSelection) {
          alert('¡¡¡si son iguales!!!')
          const cardOfSelection = document.querySelector(`.${firstSelection}`)
          const cardOfSelection2 = document.querySelectorAll(`.${secondSelection}`)[1]
          cardOfSelection.style.pointerEvents = "none";
          cardOfSelection2.style.pointerEvents = "none";
          console.log('debug 6', cardOfSelection);
          //sume puntos
          score++
          console.log('debug 5', score);
          scoreCard.innerHTML = `score: ${score}`; //generar conteo
        }
        
        firstSelection = null;
        secondSelection = null;
      } else {
        
        firstSelection = id;
      }
    } 
  })
  return divDadPokemon  
};

/*clickAction.addEventListener('click',  myFunction);
function myFunction(event) {
  console.log(event)
}*/

resetGame.addEventListener('click', reset);
function reset(e) {
  console.log('clicked')
  e.preventDefault();
  location.reload(); 
}


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
