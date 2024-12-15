//* const com um array de quatro objetos, e cada objeto com uma tag e uma frase
const elementos = [
    {tag: 'p', texto: 'Tag p'},
    {tag: 'div', texto: 'Tag div'},
    {tag: 'section', texto: 'Tag section'},
    {tag: 'footer', texto: 'Tag footer'},
];

const cont = document.querySelector('.container'); //* selecionando o container

const div = document.createElement('div'); //* criando uma div

for(let i = 0; i < elementos.length; i++){ //* for para criar o loop de criação das tags e textos

    let {tag, texto} = elementos[i]; //* desestruturação dos objetos tag e texto com base no elementos[i]

    const criarTags = document.createElement(tag); //* criando as tags
    criarTags.innerText = texto; //* adicionando os textos respectivos nas tags
    div.appendChild(criarTags); //* colocando as tags com os textos na div
    cont.appendChild(div); //* colocando a div com as tags e os textos no container
}

//! Outra forma seria criar os textos separados

//* criando as tags: 
//? const criarTags = document.createElement(tag);
//* criando o texto separado: 
//? const criarTexto = document.creatTextNode(texto);

//* adicioando o texto nas tags: 
//? criarTags.appendChild(criarTexto);
//* adicionando as tags com os textos na div: 
//? div.appendChild(criarTags);
