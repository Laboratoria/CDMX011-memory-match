 import gameBoard from './gameBoard.js';
 import header from './header.js';
 import greeting from './greeting.js';
 import button from './button.js'

 const App = () => {
   const el = document.createElement('div');
   el.className = 'App';
   el.appendChild(header());
   el.appendChild(greeting());
   el.appendChild(gameBoard());
   el.appendChild(button());
   return el;
 };
export default App;
 
