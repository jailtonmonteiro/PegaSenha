document.getElementById("gerar").addEventListener("click", function () {
  let comprimento = document.getElementById("comprimento").value;
  let senha = gerarSenha(comprimento);

  document.getElementById("senha").textContent = senha;
});

function gerarSenha(comprimento) {
  let maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let minusculas = "abcdefghijklmnopqrstuvwxyz";
  let simbolos = "!@#$%&*";
  let numeros = "1234567890";

  caracteres = '';

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
