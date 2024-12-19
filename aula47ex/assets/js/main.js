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

iniciar.addEventListener('click', function (contador) {
    
});
pausar.addEventListener('click', function (event) {
    
});
zerar.addEventListener('click', function (event) {

});