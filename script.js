function entrar() {

    // Pega o nome digitado
    let nome = document.getElementById("nome").value.trim();

    // Se a pessoa não digitar nada
    if (nome === "") {
        nome = "Visitante";
    }

    // Salva o nome
    localStorage.setItem("nomeUsuario", nome);

    // Vai para a próxima página
    window.location.href = "informativo.html";

}