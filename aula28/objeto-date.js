// const tresHoras = 60 * 60 * 3 * 1000; // adicionar horas
// const umDia = 60 * 60 * 24 * 1000; // adicionar um dia
// const data = new Date(0 + tresHoras); // 01/01/1970 TimeStamp unix ou época unix


// const data = new Date(2024, 3, 20, 15, 14, 27, 500); // o mês em js começa do 0 // a, m, d, h, M, s, ms
// const data = new Date('2019-04-20 20:15:59.998') // data específica
// const data = new Date(1733783297765); // data em milesegundos
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); // Mês começa no 0
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia Semana', data.getDay()); // 0 - Domingo, 6 - Sábado
// console.log(data.toString());

// console.log(Date.now()); // uma forma de conseguir a hora agora mas em milesegundos

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formaData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const data = new Date();
const dataBrasil = formaData(data);
console.log(dataBrasil);