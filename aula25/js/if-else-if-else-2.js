const numero = 10;

if(numero >= 0 && numero <= 5){
    console.log(`Sim, o número ${numero} está entre 0 e 5`)
} else if(numero >= 6 && numero <= 8) {
    console.log(`Sim, o número ${numero} está entre 6 e 8.`)
} else if(1 === 1){
    console.log('LITERAL'); // verdadeira
} else if(numero >= 9 && numero <= 11){ // verdadeira
    console.log(`Sim, o número ${numero} está entre 9 e 11.`)
} else {
    console.log(`Não, o número ${numero} não está entre 0 e 11.`)
}