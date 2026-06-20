function entrar() {
    let nome = document.getElementById("nome").value;

    if (nome === "") {
        document.getElementById("mensagem").innerHTML =
        "Digite seu nome para continuar.";
    } else {
        localStorage.setItem("nome", nome);
        window.location.href = "informativo.html";
    }
}