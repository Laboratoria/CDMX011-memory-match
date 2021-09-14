/*export const cronometro = ()=>{
    let min = document.getElementsByClassName("minutos");
    let seg = document.getElementsByClassName("segundos");
    let valormin = parseInt(min[0].innerHTML);
    let valorseg = parseInt(seg[0].innerHTML);
    valorseg = valorseg + 1;
    if(valorseg==60 ){
        valorseg = 0; 
        valormin = valormin + 1; 
    }
    min[0].innerHTML = valormin;
    seg[0].innerHTML = valorseg;
};
setInterval(cronometro,1000);*/