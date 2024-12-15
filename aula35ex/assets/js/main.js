//* const com um array de quatro objetos, e cada objeto com uma tag e uma frase
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

//* const que seleciona o container(onde vai ir as tags com as frases) no HTML
const cont = document.querySelector('.container');

//* elemento de repetição com base no número de objetos que tem no array de elementos
for(let i = 0; i < elementos.length; i++){

//* consts que irão pegar as tags e textos e separar em objetos
    let {tag} = elementos[i];
    let {texto} = elementos[i];

//* const que irar criar as tags e adicionar as frases com base no valor de i na sequência que aparece no array de elementos
    const criarTags = document.createElement(tag);
    cont.appendChild(criarTags).innerHTML = texto;
    console.log(i,tag,texto); //! console.log() normal para mostrar no console do navegador os valores
}