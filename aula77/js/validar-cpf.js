const frm = document.querySelector("form");
const outResult = document.querySelector('#outResult');
frm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inCPF = frm.inCPF.value;

  const numbersCPF = numCPF(inCPF);
  const sumCPF = numbersCPF.substr(0, 9);
  let arrayCPF = Array.from(sumCPF);
  const firstDig = digCPF(arrayCPF, 10);
  arrayCPF.push(firstDig);
  const secondDig = digCPF(arrayCPF, 11);
  arrayCPF.push(secondDig);

  outResult.textContent = setResult(numbersCPF, arrayCPF);
  frm.inCPF.value = '';
  frm.inCPF.focus();
});

const numCPF = (cpf) => cpf.replace(/\D+/g, "");

const digCPF = (array, mult) => {
  let sum = 0;
  for (num of array) {
    sum += Number(num) * mult;
    mult--;
  }
  return 11 - (sum % 11) > 9 ? "0" : 11 - (sum % 11);
}

const setResult = (numsCPF, arrayCPF) => {
  let stringCPF = arrayCPF.join().replace(/,/g, '');
  return stringCPF === numsCPF ? 'CPF Válido' : 'CPF Inválido';
}

// 705.484.450-52  070.987.720-03

/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Dígito > 9 = 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77  0 45 32 56 24 20 20 0  10 = 284
Dígito > 9 = 0

11 - (284 % 11) = 2 (Segundo dígito)
*/