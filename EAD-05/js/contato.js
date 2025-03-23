function enviaProBack(nome, email, mensagem) {

    console.log("📨 Enviando para o back-end:");
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Mensagem:", mensagem);


    alert("Mensagem enviada com sucesso!");
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("message").value.trim();

        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        enviaProBack(nome, email, mensagem);
        form.reset();
    });
});
