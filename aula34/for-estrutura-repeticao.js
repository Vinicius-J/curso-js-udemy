const frutas = ['Maçã', 'Pêra', 'Uva', 'Abacate', 'Goiaba', 'Melancia', 'Acerola'];

//       i = index
for (let i = 0; i <= 10; i++){ // usando for para saber números pares e ímpares
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}

for (let i = 0; i < frutas.length; i++){ // possiível usar o for para mostras os índices de um array
    console.log(`Índice ${i}`, frutas[i]);
}

for (let i = 0; i <= 5; i++){ // soma de 1 em 1
    console.log(`Linha ${i}`);
}

for (let i = 5; i >= 0; i--){ // subtrai de 1 em 1
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 100; i += 10){ // soma de 10 em 10
    console.log(`Linha ${i}`);
}

for (let i = 100; i >= 0; i -= 10){ // subtrai de 10 em 10
    console.log(`Linha ${i}`);
}