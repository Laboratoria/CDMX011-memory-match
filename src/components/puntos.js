/*export let puntos = ()=>{
    let puntaje = document.getElementsByClassName("puntos");
}*/

export const marcador = ()=>{
    let divMostrarPuntaje= document.createElement('div');
    divMostrarPuntaje.className = "puntos";
    /*let encabezado = document.getElementById("encabezado");
    encabezado.appendChild(divMostrarPuntaje);*/
    return divMostrarPuntaje;
}