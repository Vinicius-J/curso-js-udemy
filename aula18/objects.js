// const pessoa1 = {
//     nome: 'Vinícius',
//     sobrenome: 'Joaquim',
//     idade: 22,
// };

// console.log(pessoa1.idade);

function criarPessoa(nome, sobrenome, idade){
    return {
        nome,   // ou nome: nome,
        sobrenome,  // ou sobrenome: sobrenome,
        idade   // ou idade: idade
    };
    // ou return {nome, sobrenome, idade};
}

const pessoa1 = criarPessoa('Vinícius', 'Joaquim', 22)
console.log(pessoa1.nome);

const pessoa2 = {
    nome: 'Vinícius',
    sobrenome: 'Joaquim',
    idade: 22,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...}`);
    },

    incrementaIdade() {
        this.idade++
    }
};

pessoa2.fala();