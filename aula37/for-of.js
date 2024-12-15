//* for clássico -> Geralmente com iteráveis: retorna incremento ou decremento -> i++, i--, i *= 10, ... (strings or arrays)
//* for in -> retorna o índice ou chave (strings,arrays or objects)
//* for of -> retorna o valor (iteráveis: strings or arrays)

const nome = 'Vinícius Joaquim'
const frutas = ['Maçã', 'Pêra', 'Uva', 'Abacate', 'Goiaba', 'Melancia', 'Acerola'];
const pessoa = {
    nome: 'Vinícius',
    sobrenome: 'Joaquim',
    idade: 22,
}

for(let indice = 0; indice < frutas.length; indice++){ //* for clássico
    console.log('for clássico -> índice:', indice);
}

console.log('##################')

for(let indice in frutas){ //* for in
    console.log('for in -> índice:', indice);
}

console.log('##################')

for(let valor of frutas){ //* for of
    console.log('for of -> valor:', valor)
}

// for(let valor of pessoa){ //! nesse caso vai haver erro pois objetos não são iteraveis
//     console.log(valor);
// }