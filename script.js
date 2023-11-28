const horas = document.getElementById("horas");

const minutos = document.getElementById("minutos");

const segundos = document.getElementById("segundos");

const conteudoDia = document.getElementById("dia");

const conteudoMes = document.getElementById("mes")

const conteudoAno = document.getElementById("ano")

const options = { timeZone: 'America/Sao_Paulo' };


const relogio = setInterval(()=>{

let dateToday = new Date();

let hr = dateToday.getHours();

let mn = dateToday.getMinutes();

let sg = dateToday.getSeconds();

let dia = dateToday.getDay();

let mes = dateToday.getMonth

let ano = dateToday.getFullYear


if (sg < 10) {

    sg = "0" + sg 

}
if (mn < 10) {

    mn = "0" + mn

}
if (hr < 10) {

    hr= "0" + hr

}

horas.textContent = hr;

minutos.textContent = mn;

segundos.textContent = sg;//.toString().padStart(2,"0")

conteudoDia.textContent = dia.toLocaleString("pt-BR", options)



})

