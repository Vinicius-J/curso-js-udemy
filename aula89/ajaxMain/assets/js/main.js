const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();  //* xhr -> XMLHttpRequest
    //* xhr.open('GET', 'URL', assincrono/sincrono);
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) { //* status -> n° do erro HTTP
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
}

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute('href');

  const objConfig = {
    method: 'GET',
    url: href,
  }

  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch (e) {
    console.log(e);
  }


  // request({
  //   method: 'GET',
  //   url: href,
  //   success(response) {
  //     carregaResultado(response);
  //   },
  //   error(errorText) {
  //     console.log(errorText);
  //   },
  // });
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}