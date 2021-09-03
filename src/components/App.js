import pokemon from '../data/pokemon/pokemon.js';
import { DoubleData } from '../utils/DoubleData.js'
import { Shuffle } from '../utils/Shuffle.js'
import { Carta } from './Card.js'

const pokemonDatos = DoubleData(pokemon.items)

export const App = () => {
  const divContenedor = document.createElement('div');
  const dataRandom = Shuffle(pokemonDatos);
  dataRandom.forEach(function(tarjeta){
    divContenedor.appendChild(Carta(tarjeta));
  });
  return divContenedor;
};
