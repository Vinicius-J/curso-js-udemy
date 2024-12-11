// const verdadeira = true;

// let tem escopo de bloco{...um bloco...}
// var só tem escopo de função

// let nome = 'Vinícius'; // criando uma variável
// var nome2 = 'Joaquim';

// if(verdadeira){
//     let nome = 'Joacas' // criando uma variável dentro de um bloco
//     var nome2 = 'Marcelo'
//     // console.log(nome, nome2);

//     if(verdadeira){ // bloco alinhado
//         let nome = 'Outra coisa';
//         var nome2 = 'Robson'
//     }
// }
// console.log(nome, nome2);

var sobrenome = 'Joaquim';
function falaOi(){
    var nome = 'Vinícius'
    console.log(nome, sobrenome)
} 
falaOi();