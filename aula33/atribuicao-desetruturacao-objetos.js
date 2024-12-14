const pessoa = {
    nome: 'Vinícius',
    sobrenome: 'Joaquim',
    idade: 22,
    endereco: {
        rua: 'Alfenas Vidigal',
        numero: '51',
    }
}

// const nome = pessoa.nome; // atribuição normal

//                objeto     nome variável
// const {nome = '', sobrenome: segundoNome, idade} = pessoa; // atribuição via desestruturação
// console.log(nome, segundoNome, idade);

const {endereco: {rua, numero}, endereco} = pessoa;
const {nome, ...resto} = pessoa; // objeto do objeto, mas nao pega o primeiro objeto, apenas os segundos
console.log(nome, rua, numero, endereco, resto);