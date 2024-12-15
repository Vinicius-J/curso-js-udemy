const frutas = ['Maçã', 'Pêra', 'Uva']; // , 'Abacate', 'Goiaba', 'Melancia', 'Acerola'

//* for clássico
// for(let i =0; i < frutas.length; i++){
//     console.log(frutas[i]);
// }

// //* for in -> nesse caso ele vai ler os índices do array
// for (let indice in frutas){
//     console.log(frutas[indice]);
// }

const pessoa = {
    nome: 'Vinícius',
    sobrenome: 'Joaquim',
    idade: 22,
}

// console.log(pessoa['nome']); //* a forma comum para se chamar um objeto
// //* forma dinâmica para se chamar um membro de um objeto com seu valor
// const chave = 'nome'; //* criar uma const com o mesmo nome do membro que está no objeto
// console.log(pessoa[chave]); //* em vez de chamar diretamento o membro, se chama a const que foi criada 


for( let chave in pessoa){
    console.log(chave, pessoa[chave]);
}
