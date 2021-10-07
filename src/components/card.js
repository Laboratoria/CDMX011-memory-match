
// import {image} from './image.js';

 

  
    const card = (unPokemon, flipCard, checkForMatch,index) => {
    const divCard = document.createElement('div');
    const imagenPokemon = document.createElement('img');
    
    
    divCard.className = 'Card';                                                    
    imagenPokemon.src = unPokemon.image;
    divCard.dataset.id = unPokemon.id;
    divCard.dataset.idx = index; 
    divCard.appendChild(imagenPokemon) //esté es solo un elemento por eso no necesita los parentesis

    // //Aquí vamos hacer match comparando el id de las tarjetas
    //var elId = document.querySelector("div.user-panel.main input[name='login']");
 
    //Aquí volteamos el la tarjeta 
    divCard.addEventListener('click', flipCard); 
    divCard.addEventListener('click', checkForMatch);

    
    // console.log(image());
    
    return divCard;
  };
   
  export default card;

 
