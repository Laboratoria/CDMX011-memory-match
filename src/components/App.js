import pokemon from '../data/pokemon/pokemon.js';
import { DoubleData } from '../utils/DoubleData.js'
import { Shuffle } from '../utils/Shuffle.js'
import { Carta } from './Card.js'
import {ButtonReset} from '../components/ButtonReset.js'

let cartas = [];
let memoria = '';
let puntos = 0;
const pokemonDatos = DoubleData(pokemon.items)

export const App = () => {
  const divContenedor = document.createElement('div');
  divContenedor.className = "contenedor";
  divContenedor.appendChild(ButtonReset());
  const dataRandom = Shuffle(pokemonDatos);
  let contador = 0;
  
  dataRandom.forEach(function(tarjeta){
    contador++;
    let carta= Carta(tarjeta);
    
    divContenedor.appendChild(carta);
    carta.setAttribute("id", "carta" + contador);
    carta.addEventListener("click", ()=> {
      let elementos = carta.childNodes;
      contador--;
      elementos[1].style.transition='all 0.5s';
      elementos[1].style.opacity =0;

      let frente = elementos[0];
      let imagen = frente.childNodes;
      let rutaImagen = imagen[0].src;
      if(memoria == ''){
        memoria = carta;
      }else{
        //si coinciden
        if(rutaImagen==memoria.childNodes[0].childNodes[0].src){
          puntos++;
          memoria = '';
        }else{ 
          setTimeout(function(){
            carta.childNodes[1].style.transition = 'all 0.5s';
            carta.childNodes[1].style.opacity = 1;
            memoria.childNodes[1].style.transition = 'all 0.5s';
            //se había quedado abierta ahora la voy a cerrar
            memoria.childNodes[1].style.opacity = 1;
            memoria = '';
            contador=contador+2;
            console.log(contador);
          },1000);
          
        }
      }
      /*console.log(rutaImagen);*/
      /*alert(rutaImagen);*/
    });
    cartas.push(carta);
  });
  return divContenedor;
};


