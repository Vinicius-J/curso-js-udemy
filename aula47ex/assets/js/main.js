/*
1 - iniciar contagem dos segundos
2 - quando os segundos chegar em 59, vai zerar e somar 1 para os minutos
3 - quando os minutos chegar em 59, vai zerar e somar 1 para as horas
4 - botão de pausa vai parar a contagem no momento do click e colocar uma cor vermelha
5 - botão de zerar vai reiniciar a contagem do zero
*/

function zeroEsquerda(num){
    return num >= 10 ? num :`0${num}`;
}

const relogio = document.querySelector('#relogio');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');


function criarSegundos(segundos){
    const data = new Date(segundos * 1000); //? multiplicado por 1000 por causa que recebe em milesegundos 1s = 1000ms
    return data.toLocaleTimeString('pt-BR', {
        hour12:false,
        timeZone: 'UTC', //? ou 'GMT'
    })
}

let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criarSegundos(segundos);
    }, 1000)
};

iniciar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.classList.remove('pausado');
    iniciaRelogio();
});
pausar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.classList.add('pausado');
});
zerar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.classList.remove('pausado');
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});