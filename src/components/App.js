
import travel from '../data/travel/travel.js';
//console.log(pokemon);

const cards = travel.items.concat(travel.items)
console.log(cards);

export const App = () => {
  const el = document.createElement('div');
  el.className = 'App';
  el.textContent = 'Travel Memory';
  el.appendChild(CardContainer())
  return el;
 };

 export const Card = (card) => {
      const cardEl = document.createElement('div')
      cardEl.className = 'cardContent'
      const titleEl = document.createElement('p')
      titleEl.textContent = card.id
      titleEl.className = 'text'
      const img = document.createElement('img');
      img.className = 'picture'
      img.src = card.image
      cardEl.appendChild(img)
      cardEl.appendChild(titleEl)

      return cardEl
 }

 export const CardContainer = () => {
  const container = document.createElement('div')
  container.className = 'content'
  cards.forEach(function(card) {
    container.appendChild(Card(card))
   
  });

  return container
}


/*function shuffle (cards) {
  const mix = cards;
  mix.Math.random() * 5;
  }*/













