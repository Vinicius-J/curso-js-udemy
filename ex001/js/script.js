const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
 e.preventDefault();

 const inputNum1 = form.querySelector('#num1');
 const inputNum2 = form.querySelector('#num2');
 const inputNum3 = form.querySelector('#num3');

 const num1 = Number(inputNum1.value);
 const num2 = Number(inputNum2.value);
 const num3 = Number(inputNum3.value);

 if(!num1){
     setResultado('Primeiro número incorreto', false)
     return;
    }
 if(!num2){
     setResultado('Segundo número incorreto', false)
     return;
    }
 if(!num3){
     setResultado('Terceiro número incorreto', false)
     return;
    }

    const soma = getSoma(num1, num2);
    const calculo = getCalculo(soma, num3);

    const msg = `A soma dos dois primeiros números é ${soma}, sendo ${calculo} o terceiro número!`;

    setResultado(msg, true);
})

function getSoma(num1, num2){
    const soma = num1 + num2;
    return soma;
}
function getCalculo(soma, num3){
    const calculo = ['maior que', 'menor que','igual'];

    if(soma > num3){
        return calculo[0];
    } else if(soma < num3){
        return calculo[1];
    } else{
        return calculo[2];
    }
}

function criarP(){
    const p = document.createElement('p')
    return p;
}

function setResultado (msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criarP();
     
    if (isValid) {
        p.classList.add('paragrafo-resultado');
      } else {
        p.classList.add('bad');
      }

    p.innerHTML = msg;
    resultado.appendChild(p);
}