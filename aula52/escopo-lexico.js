const nome = 'Vinícius';

function falaNome(){
  console.log(nome);
}

function usaFalaNome(){
  const nome = 'Joaquim';
  falaNome();
}

usaFalaNome();