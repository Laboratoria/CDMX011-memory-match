export const ButtonReset = () => {
      let boton = document.createElement("button");
      boton.textContent = 'Reiniciar';
      boton.classList.add('button-reset')
      boton.addEventListener("click", (e)=>{
          e.preventDefault();
          location.reload(); 
      });
      return boton;
}