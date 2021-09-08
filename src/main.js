// import App from './components/App.js';
import data from '../data/webdev/webdev.js';

const allDevs = data.items;
// console.log(allDevs)

let devsHtml = "";
 allDevs.forEach((eachDev) => {
     devsHtml += `<div class="container">
     <div class="card">
     <div class="front">
     <img src=${eachDev.image} height="100px" width="90px"/>
     <p>${eachDev.id}</p>
     <div class="back">
     <p><dev></p>
     </div>
     </div>
     </div>
     </div>`;
 })
 document.getElementById("root").innerHTML = devsHtml;





// 1. Crear una estructura html para reutilizar en cada uno de los items
// 2. Definir una variable para construir una función que implemente el método map,
// 3. Crear un elemento div para poder añadir la información del objeto (createElement)
// 4. Utilizar appendChild  (suma elementos (hijos) de html en un contenedor)
// const root = document.getElementById('root')
// const templateCard = (item)=> {
// const html = `<img src=${item.image}/>`
// const card = document.createElement("div");
// card.innerHTML = html;
// return card
// }
//forEach-template-appendchild


 







//  const allDevs = document.getElementById("cards");
//  devCards(data.items);

//  function devCards (){
//      allDevs.innerHTML = "";
//      data.items.map( => {
//      let cards = document.

//      })
//  }




