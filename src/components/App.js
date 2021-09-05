import pokemon from '../data/pokemon/pokemon.js';
import { DoubleData } from '../utils/DoubleData.js'
import { Shuffle } from '../utils/Shuffle.js'
import { Carta } from './Card.js'

const pokemonDatos = DoubleData(pokemon.items)

export const App = () => {
  const divContenedor = document.createElement('div');
  divContenedor.className = "contenedor";
  const dataRandom = Shuffle(pokemonDatos);
  dataRandom.forEach(function(tarjeta){
    let carta= Carta(tarjeta);
    divContenedor.appendChild(carta);
    carta.addEventListener("click", (e) => {
        
        let elementos = carta.childNodes;
        elementos[1].style.transition='all 0.5s';
        elementos[1].style.opacity = 0;
     
    });
  });
  return divContenedor;
};

