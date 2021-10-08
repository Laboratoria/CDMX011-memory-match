import data from "../data/pokemon/pokemon.js";
import Card from "./Card.js";

const arrayPokemons = data.items;
const dataDuplicada = arrayPokemons.concat(arrayPokemons);

const Board = () => {
  //Esté es mi divBoard
  let flippedElements = []
  let matches = 0

  const divBoard = document.createElement("div");
  divBoard.className = "Board";

  //Aquí vamos hacer match comparando el id de las tarjetas
  // divBoard.dataset.id = arrayPokemons.id;

  //Está es otra forma de llamar la función flip
  function flipCard(e) {
    const el = e.currentTarget

    if (flippedElements.length === 2) {
      return
    }

    if (el.classList.contains('active')) {
      return
    }

    flippedElements.push(el)
    el.classList.toggle('active')

    if (flippedElements.length === 2) {
      if (flippedElements[0].dataset.id === flippedElements[1].dataset.id) {
        flippedElements[0].classList.add('Card--disabled')
        flippedElements[1].classList.add('Card--disabled')
        flippedElements = []
        matches++
        if (matches === data.items) {
          alert('Ganaste!! 🎉  ')
        }
      } else {
        setTimeout(() => {
          flippedElements[0].classList.toggle('active')
          flippedElements[1].classList.toggle('active')
          flippedElements = []
        }, 2000);
      }
    }
  }

  // function checkForMatch(event) {
  //   if (flippedCards[0] === flippedCards[1]) {
  //     console.log("son par");
  //     console.log(flippedCards);
  //   } else if (
  //     flippedCards.length === 2 &&
  //     flippedCards[0] !== flippedCards[1]
  //   ) {
  //     let selectedElement = event.currentTarget;
  //     selectedElement.classList.toggle("active");
  //     console.log("no son par");
  //     console.log(flippedCards);
  //     flippedCards = [];
  //   }
  // }

  dataDuplicada.forEach((card) => divBoard.appendChild(Card(card, flipCard)));

  return divBoard;
};

export default Board;
