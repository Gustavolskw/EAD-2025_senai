document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebarMenu");
    const toggleButton = document.getElementById("toggleSidebar");

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("show");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    function aplicarMascaraCPF(valor) {
        return valor.replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    function aplicarMascaraRG(valor) {
        return valor.replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1})$/, "$1-$2");
    }

    document.getElementById("cpf").addEventListener("input", function () {
        this.value = aplicarMascaraCPF(this.value);
    });

    document.getElementById("rg").addEventListener("input", function () {
        this.value = aplicarMascaraRG(this.value);
    });

    document.getElementById("formCadastro").addEventListener("submit", function (event) {
        event.preventDefault();
        let valido = true;
        document.querySelectorAll("#formCadastro input, #formCadastro select").forEach(function (input) {
            if (!input.value) {
                valido = false;
                input.classList.add("is-invalid");
            } else {
                input.classList.remove("is-invalid");
            }
        });
        if (valido) {
            alert("Formulário enviado com sucesso!");
            document.getElementById("formCadastro").reset();
        } else {
            alert("Preencha todos os campos corretamente.");
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    function aplicarMascaraTelefone(valor) {
        return valor.replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{4,5})(\d{4})$/, "$1-$2");
    }

    function aplicarMascaraCEP(valor) {
        return valor.replace(/\D/g, "")
            .replace(/(\d{5})(\d{3})$/, "$1-$2");
    }

    document.getElementById("telefoneContato").addEventListener("input", function () {
        this.value = aplicarMascaraTelefone(this.value);
    });

    document.getElementById("celularContato").addEventListener("input", function () {
        this.value = aplicarMascaraTelefone(this.value);
    });

    document.getElementById("cepContato").addEventListener("input", function () {
        this.value = aplicarMascaraCEP(this.value);
    });

    document.getElementById("formContato").addEventListener("submit", function (event) {
        event.preventDefault();
        let valido = true;
        document.querySelectorAll("#formContato input, #formContato select, #formContato textarea").forEach(function (input) {
            if (!input.value) {
                valido = false;
                input.classList.add("is-invalid");
            } else {
                input.classList.remove("is-invalid");
            }
        });
        if (valido) {
            alert("Formulário enviado com sucesso!");
            document.getElementById("formContato").reset();
        } else {
            alert("Preencha todos os campos corretamente.");
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formCredenciais").addEventListener("submit", function (event) {
        event.preventDefault();
        let valido = true;
        let senha = document.getElementById("senhaLogin").value;
        let confirmaSenha = document.getElementById("confirmaSenhaLogin").value;

        document.querySelectorAll("#formCredenciais input, #formCredenciais select").forEach(function (input) {
            if (!input.value) {
                valido = false;
                input.classList.add("is-invalid");
            } else {
                input.classList.remove("is-invalid");
            }
        });

        if (senha !== confirmaSenha) {
            valido = false;
            document.getElementById("confirmaSenhaLogin").classList.add("is-invalid");
            alert("As senhas não coincidem.");
        }

        if (valido) {
            alert("Formulário enviado com sucesso!");
            document.getElementById("formCredenciais").reset();
        } else {
            alert("Preencha todos os campos corretamente.");
        }
    });
});




document.addEventListener("DOMContentLoaded", function () {
    function aplicarMascaraCNPJ(valor) {
        return valor.replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{4})/, "$1/$2")
            .replace(/(\d{4})(\d{2})$/, "$1-$2");
    }

    document.getElementById("cnpj").addEventListener("input", function () {
        this.value = aplicarMascaraCNPJ(this.value);
    });

    document.getElementById("formProfissional").addEventListener("submit", function (event) {
        event.preventDefault();
        let valido = true;
        document.querySelectorAll("#formProfissional input").forEach(function (input) {
            if (!input.value) {
                valido = false;
                input.classList.add("is-invalid");
            } else {
                input.classList.remove("is-invalid");
            }
        });

        if (valido) {
            alert("Formulário enviado com sucesso!");
            document.getElementById("formProfissional").reset();
        } else {
            alert("Preencha todos os campos corretamente.");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formPreferencias").addEventListener("submit", function (event) {
        event.preventDefault();
        let valido = true;
        document.querySelectorAll("#formPreferencias input[required], #formPreferencias select[required]").forEach(function (input) {
            if (!input.value) {
                valido = false;
                input.classList.add("is-invalid");
            } else {
                input.classList.remove("is-invalid");
            }
        });
        if (valido) {
            alert("Formulário enviado com sucesso!");
            document.getElementById("formPreferencias").reset();
        } else {
            alert("Preencha todos os campos corretamente.");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    function aplicarMascaraCartao(valor) {
        return valor.replace(/\D/g, "")
            .replace(/(\d{4})(\d)/, "$1 $2")
            .replace(/(\d{4})(\d)/, "$1 $2")
            .replace(/(\d{4})(\d)/, "$1 $2")
            .replace(/(\d{4})\d+?$/, "$1");
    }

    document.getElementById("numeroCartao").addEventListener("input", function () {
        this.value = aplicarMascaraCartao(this.value);
    });

    document.getElementById("formPagamento").addEventListener("submit", function (event) {
        event.preventDefault();
        let valido = true;
        document.querySelectorAll("#formPagamento input, #formPagamento select").forEach(function (input) {
            if (!input.value) {
                valido = false;
                input.classList.add("is-invalid");
            } else {
                input.classList.remove("is-invalid");
            }
        });

        if (valido) {
            alert("Formulário enviado com sucesso!");
            document.getElementById("formPagamento").reset();
        } else {
            alert("Preencha todos os campos corretamente.");
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formOutrosRecursos").addEventListener("submit", function (event) {
        event.preventDefault();
        let valido = true;
        document.querySelectorAll("#formOutrosRecursos input[required]").forEach(function (input) {
            if (!input.value) {
                valido = false;
                input.classList.add("is-invalid");
            } else {
                input.classList.remove("is-invalid");
            }
        });
        if (!document.querySelector('input[name="aceiteTermos"]:checked')) {
            valido = false;
            alert("Você deve aceitar os termos.");
        }
        if (valido) {
            alert("Formulário enviado com sucesso!");
            document.getElementById("formOutrosRecursos").reset();
        } else {
            alert("Preencha todos os campos corretamente.");
        }
    });
});
