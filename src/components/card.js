
import {image} from './image.js'

  
    const card = (unPokemon) => {
    const divCard = document.createElement('div');
    const imagenPokemon = document.createElement('img');
    
    divCard.className = 'Card active';                                                     
    imagenPokemon.src = unPokemon.image;
    divCard.appendChild(imagenPokemon) //esté es solo un elemento por eso no necesita los parentesis
  
     // primero impres en consola y despues ejecutas dentro image()
    console.log(image());
  
    return divCard;
  };

  export default card;

