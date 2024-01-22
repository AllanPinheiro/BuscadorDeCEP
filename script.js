function buscarcepapi() {
  const inputcep = document.querySelector("#inCep").value;

  if (inputcep.length !== 8) {
    alert("cep invalido");
    return;
  }

  const url = `https://viacep.com.br/ws/${inputcep}/json/`;

  fetch(url).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      mostrarresult(data);
    });
  });
}

function mostrarresult(dados) {
  const resultado = document.querySelector("#result");

  resultado.innerHTML = `<p> CEP: ${dados.cep} </p>
                   <p> Bairro: ${dados.bairro} </p>
                  <p> RUA: ${dados.logradouro} </p>
               <p> Cidade: ${dados.localidade} </p>
                       <p> Estado: ${dados.uf} </p>`;
}
