const textComprimento = "Comprimento deve ser entre 4 e 20 caracteres!";
const textSucesso = "Senha gerada com sucesso!";
const textCopia = "Senha copiada para área de tranferência!";
const textCheck = "Selecione um caracter";

document.getElementById("gerar").addEventListener("click", function () {
  let comprimento = document.getElementById("comprimento").value;
  if (comprimento < 4 || comprimento > 20 || comprimento == "") {
    document.getElementById("feedback").textContent = textComprimento;
    document.getElementById("senha").textContent = "";
  } else {
    document.getElementById("feedback").textContent = textSucesso;

    let senha = gerarSenha(comprimento);
    if (senha == "") {
      document.getElementById("feedback").textContent = textCheck;
    } else {
      document.getElementById("senha").textContent = senha;
    }
  }
});

document.getElementById("copiar").addEventListener("click", function () {
  let senha = document.getElementById("senha").textContent;
  if (senha.length <= 0) {
    document.getElementById("feedback").textContent = textComprimento;
  } else {
    navigator.clipboard.writeText(senha).then(function () {
      document.getElementById("feedback").textContent = textCopia;
    });
  }
});

function gerarSenha(comprimento) {
  let maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let minusculas = "abcdefghijklmnopqrstuvwxyz";
  let simbolos = "!@#$%&*";
  let numeros = "1234567890";

  caracteres = "";

  if (document.getElementById("checknum").checked) {
    caracteres += numeros;
  }
  if (document.getElementById("checkmai").checked) {
    caracteres += maiusculas;
  }
  if (document.getElementById("checkmin").checked) {
    caracteres += minusculas;
  }
  if (document.getElementById("checksim").checked) {
    caracteres += simbolos;
  }

  let senha = "";

  for (let i = 0; i < comprimento; i++) {
    let indice = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[indice];
  }
  return senha;
}

let numeroInput = document.getElementById("comprimento");
let rangeInput = document.getElementById("range");

rangeInput.addEventListener("input", function () {
  numeroInput.value = rangeInput.value;
});

numeroInput.addEventListener("input", function () {
  let valor = Math.min(Math.max(numeroInput.value, 4), 20);
});
