import data from '../data/webdev/webdev.js';

export const card = () => {
let devsHtml = "";
// let devsArray = data.items;
let cloneDevs = data.items;
cloneDevs = cloneDevs.concat(devsArray);
cloneDevs.forEach((eachDev) => {
    devsHtml += `<div class="container">
    <div class="card">
    <div class="frontcard"
    <p>guess the dev<br>?</p>
    </div>
    <div class="backcard">
    <img src=${eachDev.image} height="65px" width="50px"/>
    <p>${eachDev.id}</p>
    </div>
    </div>
    </div>`;
})
document.getElementById("root").innerHTML = devsHtml;
}









