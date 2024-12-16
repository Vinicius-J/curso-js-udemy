//* while -> enquanto a condiçao foi verdadeira vai executar o laço
//* do while -> executar o código primeiro depois chegar a condição


// const nome = 'Vinícius'; 
// let i = 0; //* primeira diferença é que a variável vai fora do bloco de controle

// while(i < nome.length){ //* condição para executar o que tem dentro do bloco de controle
//     console.log(nome[i]);
//     i++; //! sempre alterar o valor da variável para não criar um laço infinito
// }

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = 10; // random(min, max);

while(rand !== 10){
    rand = random(min, max);
    console.log(rand);
}

console.log('#####################')

do{
    // rand = random(min, max);
    console.log(rand);
} while(rand !== 10);