import  HarryPotter  from '../data/HarryPotter/HarryPotter.js';
import { shuffle } from './Shuffle.js';


const data = HarryPotter.items;
const cardsPair = data.concat(data);
let click = [];

//HTML dinámico
export const App = () => {

  const imgDiv = document.createElement('div');
  imgDiv.className = 'App';

  cardsPair.forEach(function(target){
    const targDiv = document.createElement('div');
    targDiv.className = 'targets';
    const divFront = document.createElement ('div');
    divFront.className = 'divFront';
    const cardFront = document.createElement('img');
    cardFront.src=target.image;
    cardFront.className = 'front';
   const divBack = document.createElement ('div');
    divBack.className = 'divBack';
    const cardBack = document.createElement('img');
    cardBack.src= 'img/back-card.jpg';
    cardBack.className = 'back';


    divBack.append(cardBack)
    divFront.append(cardFront)

    targDiv.append(divBack)
    targDiv.append(divFront)

    imgDiv.append(targDiv)



  })
  return imgDiv
}


