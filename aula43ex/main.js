//* Escreva uma função quer recebe o número e retorne o seguinte:
//* 1 -> Número é divisível por 3 = Fizz
//* 2 -> Número é divisível por 5 = Buzz
//* 3 -> Número é divisível por 3 e 5 = FizzBuzz
//* 4 -> Número NÃO é divisível por 3 e 5 = Retorna o próprio número
//* 5 -> Checar se o número é realmente um número = Retorne o que recebeu
//* 6 -> Use a função com números de 0 a 100 = Usando lapsos de repetição

// let i = 0; //? Minha resolução
// do{
//     function fizzBuzz(i){
//         if(!i){
//             console.log(i);
//         } else if(i % 3 === 0 && i % 5 === 0){
//             console.log('FizzBuzz');
//         } else if(i % 5 === 0){
//             console.log('Buzz')
//         } else if(i % 3 === 0){
//             console.log('Fizz');
//         } else(
//             console.log(i)
//         )
//     }
//     fizzBuzz(i);
//     i++;
// } while(i < 100);


function fizzBuzz(numero){ //* Resolução do professor
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 5 === 0) return 'Buzz';
    if (numero % 3 === 0) return 'Fizz';
    return numero;
}

for(let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}