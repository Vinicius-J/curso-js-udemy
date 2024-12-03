function imc(){ // função que vai fazer o cálculo do IMC e retornar o valor com a descrição
  const form = document.querySelector('#formulario'); // Evidência o formulário
  const resultado = document.querySelector('#resultado'); // Evidência onde vai sair o resultado

  function recebeEventoForm(evento){ // Função que vai receber o submit para calcular o IMC
    evento.preventDefault();
    
    const peso = form.querySelector('#peso'); // Evidência o input de peso
    const altura = form.querySelector('#altura'); // Evidência o input de altura
    const resultadoImc = peso.value/altura.value**2; // Calculo do IMC

    /*
    A seguir está o código que eu pensei como solução para esse exercício, usando if e else if, innerHTML, colocando diretamente no JavaScript o parágrafo com os estilos CSS de cada resultado.
    */
    
    if(peso.value<=1 || peso.value>=300){
      resultado.innerHTML = `<p style="background-color:#ff9999; padding:8px;">Peso informado está incorreto.</p>`
    }else if(altura.value<1 || altura.value>=3){
      resultado.innerHTML = `<p style="background-color:#ff9999; padding:8px;">Altura informada está incorreta.</p>`
    }else if(resultadoImc < 18.5){
      resultado.innerHTML = `<p style="background-color:#80b3ff; padding:8px;">Seu IMC é de ${resultadoImc.toFixed(2)} (Abaixo do peso).</p>`
    }else if(resultadoImc >= 18.5 && resultadoImc <= 24.9){
      resultado.innerHTML = `<p style="background-color:#aaff80; padding:8px;">Seu IMC é de ${resultadoImc.toFixed(2)} (Peso normal).</p>`
    }else if(resultadoImc >= 25 && resultadoImc <= 29.9){
      resultado.innerHTML = `<p style="background-color:#ffff80; padding:8px;">Seu IMC é de ${resultadoImc.toFixed(2)} (Sobrepeso).</p>`
    }else if(resultadoImc >= 30 && resultadoImc <= 34.9){
      resultado.innerHTML = `<p style="background-color:#ff8080; padding:8px;">Seu IMC é de ${resultadoImc.toFixed(2)} (Obesidade grau 1).</p>`
    }else if(resultadoImc >= 35 && resultadoImc <= 39.9){
      resultado.innerHTML = `<p style="background-color:#ff8080; padding:8px;">Seu IMC é de ${resultadoImc.toFixed(2)} (Obesidade grau 2).</p>`
    }else if(resultadoImc >= 40){
      resultado.innerHTML = `<p style="background-color:#ff8080; padding:8px;">Seu IMC é de ${resultadoImc.toFixed(2)} (Obesidade grau 3).</p>`
    }
  }
  form.addEventListener('submit', recebeEventoForm);
}
imc()