 import gameBoard from './gameBoard.js';
 import header from './header.js';
 import button from './button.js'

 const App = () => {
   const el = document.createElement('div');
   el.className = 'App';
   el.appendChild(header());
   el.appendChild(button());
   el.appendChild(gameBoard());
   return el;
 };
export default App;
 
