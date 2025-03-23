const usuariosArray = [];

document.getElementById("form-user-register").addEventListener("submit", function (event) {
    event.preventDefault(); // evita reload da página
    adicionarUsuario();
});

document.getElementById("navigateBtn").addEventListener("click", function () {
    window.location.href = "paginas/contato";
});

function adicionarUsuario() {
    const nome = document.getElementById("nomeUsuario").value.trim();
    const email = document.getElementById("emailUsuario").value.trim();

    if (!nome || !email) {
        alert("Preencha todos os campos!");
        return;
    }

    const usuario = { nome, email };
    usuariosArray.push(usuario);

    atualizarListaUsuarios();
    limparCampos();
}

function atualizarListaUsuarios() {
    const lista = document.getElementById("listausers");
    lista.innerHTML = "";

    usuariosArray.forEach(usuario => {
        const li = document.createElement("li");
        li.innerHTML = `${usuario.nome} - ${usuario.email} 
            <button class="btn btn-reset" data-email="${usuario.email}">Remover</button>`;
        lista.appendChild(li);
    });

    // Adiciona o evento nos botões de remover
    document.querySelectorAll("button[data-email]").forEach(btn => {
        btn.addEventListener("click", function () {
            removerUsuario(this.getAttribute("data-email"));
        });
    });
}

function removerUsuario(email) {
    const index = usuariosArray.findIndex(user => user.email === email);
    if (index !== -1) {
        usuariosArray.splice(index, 1);
        atualizarListaUsuarios();
    }
}

function limparCampos() {
    document.getElementById("nomeUsuario").value = "";
    document.getElementById("emailUsuario").value = "";
}
