//import { suffle } from "../utils";

//Crear Boton Aleatorio
export const button =()=>{
    const containerButton = document.createElement("div");
    containerButton.id="divButton"
    const button= document.createElement("button")
    button.id= "button"
    button.textContent ="Play"
    containerButton.appendChild(button)
     button.addEventListener("click", function(){
      location.reload();
    }) 
  
    return containerButton
  } 
  