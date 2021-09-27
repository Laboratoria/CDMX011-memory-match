// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);

import Titulo from "./Titulo.js";

const App = () => {
const el = document.createElement('div');
  
  el.className = 'tituloMemo';
  el.appendChild(Titulo());
  
  


   
  
 

  return el;
};

export default App;
