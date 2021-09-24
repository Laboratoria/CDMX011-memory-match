import pokemon from '../data/pokemon/pokemon.js';
import { DoubleData } from '../utils/DoubleData.js'
import { Shuffle } from '../utils/Shuffle.js'
import { Carta } from './Card.js'
import {ButtonReset} from '../components/ButtonReset.js'
import {marcador} from '../components/puntos.js'
/*import {cronometro} from '../components/cronometro.js'*/

let cartas = [];
let memoria = '';
const pokemonDatos = DoubleData(pokemon.items)

export const App = () => {
  const divContenedor = document.createElement('div');
  divContenedor.className = "contenedor";
  //traer el boton
  const encabezado=document.getElementById("encabezado");
  encabezado.appendChild(ButtonReset());
  let puntaje = marcador();
  encabezado.appendChild(puntaje);
  const dataRandom = Shuffle(pokemonDatos);
  let contador = 0;
  let puntos = 0;
  
  /*mostrarCronometro();*/
  
  dataRandom.forEach(function(tarjeta){
    contador++;
    let carta= Carta(tarjeta);
    
    divContenedor.appendChild(carta);
    carta.setAttribute("id", "carta" + contador);
    carta.addEventListener("click", ()=> {
      //REGREsa todos su hijos que contiene carta.
      let elementos = carta.childNodes;
      contador--;
      //elementos 1 nos referimos a detras
      elementos[1].style.transition='all 0.5s';
      elementos[1].style.opacity =0;
      
      let frente = elementos[0];
      let imagen = frente.childNodes;
      let rutaImagen = imagen[0].src;
      if(memoria == ''){
        memoria = carta;
      }else{
        //si coinciden
        if(memoria.getAttribute("id")!=carta.getAttribute("id")){
          if(rutaImagen==memoria.childNodes[0].childNodes[0].src){ 
            puntos=puntos+1;
            /*console.log(puntaje);**/
            let puntaje = document.getElementsByClassName("puntos");
            puntaje[0].innerHTML=puntos;

            memoria = '';
          }else{ 
          //Es para hacer un pequeño retraso 
          //en caso de que no coincidan las voltea
            setTimeout(function(){
              carta.childNodes[1].style.transition = 'all 0.5s';
              carta.childNodes[1].style.opacity = 1;
              memoria.childNodes[1].style.transition = 'all 0.5s';
              //se había quedado abierta ahora la voy a cerrar
              memoria.childNodes[1].style.opacity = 1;
              memoria = '';
                //Se agrega el contador para contar cartas restantexs
              contador=contador+2;
              console.log(contador);
            },1000);
           } 
        }
      }
      /*console.log(rutaImagen);*/
      /*alert(rutaImagen);*/
    });
    cartas.push(carta);
  });
  return divContenedor;
};