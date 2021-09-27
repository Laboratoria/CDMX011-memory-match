// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);

import Titulo from "./Titulo.js";
import mainTarjeta from "./mainTarjet.js";





const App = () => {
const elDiv = document.createElement('div');


  
elDiv.className = 'App';
elDiv.appendChild(Titulo());
elDiv.appendChild(mainTarjeta()); 




  return elDiv;
};

export default App;
