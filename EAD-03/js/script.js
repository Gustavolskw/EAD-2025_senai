let lastScrollY = window.scrollY;
const navbar = document.getElementById("navBar");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
        navbar.classList.add("nav-hide");
    } else {
        navbar.classList.remove("nav-hide");
    }
    lastScrollY = window.scrollY;
});




document.getElementById("telefone").addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 10) {
        e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
    } else {
        e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6, 10)}`;
    }
});


function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const emailFeedback = document.getElementById("emailFeedback");
    const alertSuccess = document.getElementById("alertSuccess");

    if (!validarEmail(emailInput.value)) {
        emailInput.classList.add("is-invalid");
        return;
    } else {
        emailInput.classList.remove("is-invalid");
    }


    alertSuccess.classList.remove("d-none");


    this.reset();


    setTimeout(() => {
        alertSuccess.classList.add("d-none");
    }, 3000);
});