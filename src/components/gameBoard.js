import data from '../data/webdev/webdev.js';
import card from "./card.js";

const webDevs = data.items.concat(data.items);
console.log(webDevs)

const gameBoard = () => {
    const board = document.createElement('div');
    board.className = 'board';

    let elementsSelected = []
    let matches = 0;

    function flipCard(event){
        let elementSelected = event.currentTarget;
        if (elementSelected.classList.contains('backcard')) return
        
        if (elementsSelected.length === 2) return
        
        
        elementsSelected.push(elementSelected);
        elementSelected.classList.toggle('backcard');
        

        if (elementsSelected.length === 2) {
            if(elementsSelected[0].dataset.id === elementsSelected[1].dataset.id){
                elementsSelected[0].classList.add('card-disabled');
                elementsSelected[1].classList.add('card-disabled');
                elementsSelected = [];
                matches++ 
            if(matches == data.items.length){
                    alert('you won!')
                }
                                     
            } else { 
                setTimeout(() => {
                    elementsSelected[0].classList.toggle('frontcard');
                    elementsSelected[1].classList.toggle('frontcard');
                    elementsSelected = [];
                }, 900);
            }
        } 
    }
    webDevs.forEach((eachCard) => board.appendChild(card(eachCard, flipCard)));

    return board;
}

export default gameBoard;











// const gameBoard = () => {
//      let elementSelected = []
//      let matches = 0

//      const board = document.createElement('div');
//      board.className = 'gameBoard';

//      function flipCard(event){
//          let element = event.currentTarget
//          let elementId = event.currentTarget.dataset.id
//          elementSelected.push(elementId)
//          element.classList.toggle('frontcard')
//              if (elementSelected.lenght === 2) {
//              return
//              }
//              if (element.classList.contains('backcard')) {
//              return
//              }
//              if (elementSelected.lenght === 2) {
//               if (elementSelected[0].dataset.id === elementSelected[1].dataset.id){
//                  elementSelected[0].classList.add('card-disabled')
//                  elementSelected[1].classList.add('card-disabled')
//                  elementSeleted = []
//                  matches++
//                   if (matches === data.items) {
//                      alert('you won B)')
//                      }
//                  } else {
//                      setTimeout(() => {
//                       elementSelected[0].classList.toggle('frontcard')
//                       elementSelected[1].classList.toggle('frontcard')
//                       elementSelected = []
//                      }, 1000);
//                  }
//              }
//      } webDevs.forEach((eachCard) => board.appendChild(card(eachCard, flipCard)));
//  return board;
//  }
//  export default gameBoard; 