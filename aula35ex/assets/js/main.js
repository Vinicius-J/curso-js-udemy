/*
1 - Funções que iram criar as tags HTML
2- Separar as frases
3 - Colocar as frases nas tags
4 - Colocar as tags com as frases no HTMl
*/

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

for(let i = 0; i < elementos.length; i++){
    const objetos = elementos[i];
    // const {tag} = objetos;
    const {texto} = objetos;
    
    document
}

 function criarP(){
    const p = document.createElement('p');
    return p;
 }
 function criarDiv(){
    const div = document.createElement('div');
    return div;
 }
 function criarFooter(){
    const footer = document.createElement('footer');
    return footer;
 }
function criarSection(){
    const section = document.createElement('section');
    return section;
}