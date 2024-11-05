let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
// let varCA = 'A'; // Minha resolução

// const varATemp = varA; // solução do professor, salvar o valor no tempo

// varA = varB;
// varB = varC;
// varC = varCA; ou varC = varATemp;

[varA, varB, varC] = [varB, varC, varA] // Solução mais moderna do JavaScript


console.log(varA, varB, varC);