
import data from '../data/pokemon/pokemon.js';
import card from "./card.js";


const arrayPokemons = data.items;
const dataDuplicada = arrayPokemons.concat(arrayPokemons); 


 const Board = () => {

    //Esté es mi divBoard 
    const divBoard = document.createElement('div');
    divBoard.className = 'Board';
    
    //Aquí vamos hacer match comparando el id de las tarjetas
    // divBoard.dataset.id = arrayPokemons.id; 
 

    //Está es otra forma de llamar la función flip 
    let selectedItems = []
    function flipCard(event) {
      //console.log(event.target);
      let selectedElement = event.currentTarget
      const selectedId = event.currentTarget.dataset.id 
      selectedItems.push(selectedId)
      selectedElement.classList.toggle('Card');
      
    }

      function checkForMatch (event) { 
     if(selectedItems[0] === selectedItems[1]){
       console.log("son par");
       console.log(selectedItems);
      
       
    }
      else if (selectedItems.length === 2 && selectedItems[0] !== selectedItems[1]){ 
      let selectedElement = event.currentTarget
      selectedElement.classList.toggle('active');
      console.log('no son par');  
      console.log(selectedItems);
      selectedItems = []
      }
     
      }
    
       
    dataDuplicada.forEach((unPokemon, index)=> divBoard.appendChild(card(unPokemon, flipCard,checkForMatch, index)));
    console.log(dataDuplicada);
 
  
    return divBoard;
};



  export default Board;

