import Board from "./Board.js";

const mainTarjeta = () => {
    const main = document.createElement('main');
    main.appendChild(Board()); 
  
    return main;
  };

  export default mainTarjeta;
