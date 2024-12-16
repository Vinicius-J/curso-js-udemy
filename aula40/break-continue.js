//* continue -> continua para a próxima iteração
//* break -> sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let numero of numeros){

    if(numero === 2){
        console.log('Pulei o número 2');
        continue;
    }

    console.log(numero); // encontra o 7, mostra ele e sai

    if(numero === 7){
        // console.log('7 encontrado, saindo....');
        break;
    }
    console.log(numero); // encontra o 7 e sai antes de mostrar ele
}