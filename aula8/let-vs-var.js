// Usando a tag var na variável eu posso redeclarar o valor sem ter um erro
// Mas usando let isso não é possível, eu posso apenas alterar o valor
var nome = 'Joaquim'; // Alterei o valor de nome redeclaram a variável var
var nome = 'Vinícius';
console.log(nome);

let sobrenome = 'Vinícius'; // Alterei o valor de sobrenome sem redeclarar a variável let
sobrenome = 'Joaquim'; // Apenas aplicando outro valor a sobrenome
console.log(sobrenome); // ECMAScript é uma padronização da linguagem JavaScript