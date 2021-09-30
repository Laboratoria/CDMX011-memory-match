
import {image} from './image.js'

  
    const card = (unPokemon, flipCard) => {
    const divCard = document.createElement('div');
    const imagenPokemon = document.createElement('img');
    
    divCard.className = 'Card';                                                    
    imagenPokemon.src = unPokemon.image;
    divCard.appendChild(imagenPokemon) //esté es solo un elemento por eso no necesita los parentesis
    
    divCard.addEventListener('click', flipCard)


    console.log(image());
  
    return divCard;
  };
   
  export default card;

 
