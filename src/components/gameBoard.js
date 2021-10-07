import card from "./card.js";
import data from '../data/webdev/webdev.js';

const gameBoard = () => {
    const webDevs = data.items.concat(data.items);

    const board = document.createElement('div');
    board.className = 'gameBoard';

    // function flipCard(){
    //     this.classList.toggle('')
    // }

    // function match(){

    // }


    webDevs.forEach((eachCard) => {
        const cardEl = card(eachCard)
        board.appendChild(cardEl)
    })
    

    return board;
}
export default gameBoard;



