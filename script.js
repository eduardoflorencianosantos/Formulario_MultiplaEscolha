function funcaoCorrigir() {
    var respostaCerta = "correta";
    var respostaUsuario = document.querySelector('input[name="resposta"]:checked');

    if (respostaUsuario) {
        if (respostaUsuario.value === respostaCerta) {
            document.getElementById("retorno").innerHTML = "Acertou, mizeravi!";
        }
        else {
            document.getElementById("retorno").innerHTML = "Errou, cabaço!";
        }
    }
    else {
        alert("Tem que escolher uma opção, cabaço!");
    }
}