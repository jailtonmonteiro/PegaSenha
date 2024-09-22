document.getElementById("gerar").addEventListener("click", function(){
    let comprimento = document.getElementById("comprimento").value;
    let senha = gerarSenha(comprimento);

    document.getElementById("senha").textContent = senha;
});

function gerarSenha(comprimento) {
    let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let senha = '';

    for (let i = 0; i < comprimento; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }
    return senha;
}