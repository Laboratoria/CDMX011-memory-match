// import {image} from './image.js';

const Card = (card, flipCard) => {
  const divCard = document.createElement("div");
  const imagenPokemon = document.createElement("img");

  divCard.className = "Card";
  imagenPokemon.src = card.image;
  divCard.dataset.id = card.id;
  divCard.appendChild(imagenPokemon); //esté es solo un elemento por eso no necesita los parentesis

  // //Aquí vamos hacer match comparando el id de las tarjetas
  //var elId = document.querySelector("div.user-panel.main input[name='login']");

  //Aquí volteamos el la tarjeta
  divCard.addEventListener("click", flipCard);

  // console.log(image());

  return divCard;
};

export default Card;
