// const text = document.querySelector('h1');
// function zeroLeft(num){
//     return num >= 10 ? num : `0${num}`;
// }
// function getDate(data){
//     let diaSemana = zeroLeft(data.getDay());
//     let dia = data.getDate();
//     let mes = data.getMonth();
//     let ano = data.getFullYear();
//     let hora = zeroLeft(data.getHours());
//     let min = zeroLeft(data.getMinutes());
    
//     if(diaSemana == 0){
//         diaSemana = 'Domingo'
//     } else if (diaSemana == 1){
//         diaSemana = 'Segunda-feira'
//     } else if (diaSemana == 2){
//         diaSemana = 'Terça-feira'
//     } else if (diaSemana == 3){
//         diaSemana = 'Quarta-feira'
//     } else if (diaSemana == 4){
//         diaSemana = 'Quinta-feira'
//     } else if (diaSemana == 5){
//         diaSemana = 'Sexta-feira'
//     } else if (diaSemana == 6){
//         diaSemana = 'Sábado'
//     }

//     if(mes == 0){
//         mes = 'janeiro'
//     } else if(mes == 1){
//         mes = 'fevereiro'
//     } else if(mes == 2){
//         mes = 'março'
//     } else if(mes == 3){
//         mes = 'abril'
//     } else if(mes == 4){
//         mes = 'maio'
//     } else if(mes == 5){
//         mes = 'junho'
//     } else if(mes == 6){
//         mes = 'julho'
//     } else if(mes == 7){
//         mes = 'agosto'
//     } else if(mes == 8){
//         mes = 'setembro'
//     } else if(mes == 9){
//         mes = 'outubro'
//     } else if(mes == 10){
//         mes = 'novembro'
//     } else if(mes == 11){
//         mes = 'dezembro'
//     }

//     return `${diaSemana}, ${dia} ${mes} de ${ano} ${hora}:${min}`;
// }
// const data = new Date();
// const dataNow = getDate(data);
// text.innerHTML = dataNow;


const text = document.querySelector('.container h1');
const data = new Date();

text.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle:'short'});