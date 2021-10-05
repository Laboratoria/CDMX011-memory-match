import data from '../data/webdev/webdev.js'
import {card} from './card.js'
import {shuffle} from './shuffle.js'

let devsHtml='';
// let devsArray = data.items;
let cloneDevs = data.items;
cloneDevs = cloneDevs.concat(cloneDevs);
let dataRandom = shuffle(cloneDevs)

export const App = () => {
  const board = document.createElement('div');
  board.className = 'container';
  dataRandom.forEach((eachDev) => {
        devsHtml += `<div class="container">
                     <div class="card">
                     <div class="frontcard"
                     <p>hey! <br>match <br> the <br> dev </p>
                     </div>
                     <div class="backcard">
                     <img src=${eachDev.image} height="65px" width="50px"/>
                     <p>${eachDev.id}</p>
                     </div>
                     </div>
                     </div>`;
      })

  board.innerHTML=devsHtml;
  return board;
  };


//   function flipCard (){
//     this.classList.toggle('flip')

// }
// card.forEach(card.addEventListener('click', flipCard))


 
