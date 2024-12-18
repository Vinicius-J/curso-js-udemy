const relogio = document.querySelector('#relogio');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');

iniciar.addEventListener('click', function(event){
    alert('cliquei no iniciar');
});
pausar.addEventListener('click', function(event){
    alert('cliquei no pausar');
});
zerar.addEventListener('click', function(event){
    alert('cliquei no zerar');
});
