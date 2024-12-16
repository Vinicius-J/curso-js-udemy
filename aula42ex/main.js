//* Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
//* Retorne true se a imagem estiver no modo paisagem.
//! Modo paisagem = largura maior que altura.

// function ePaisagem(largura, altura){ //? Minha resolução
//     const paisagem = largura > altura || altura < largura;
//     return paisagem;
// };

// function ePaisagem(largura, altura){ //* Primeira resolução do professor
//     return largura > altura ? true : false;
// };

// function ePaisagem(largura, altura){ //* Segunda resolução do professor
//     return largura > altura;
// };

const ePaisagem = (largura, altura) => largura > altura;  //* Terceira resolução do professor

console.log(ePaisagem(1920,1080));