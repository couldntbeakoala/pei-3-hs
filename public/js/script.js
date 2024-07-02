/* CÓDIGO PARA INTERAÇÕES QUE OCORREM EM TODAS AS PÁGINAS */

document.addEventListener("DOMContentLoaded", function () {
    // Função para abrir/fechar o menu (mobile)
    function setupNavbarMBL() {
        // Referenciando os respectivos elementos às variáveis dos "caminhos"
        const navBarMbl = document.getElementById("nav-mobile");
        const [openBtn, closeBtn] =
            document.getElementsByClassName("navbarBtn");

        // A seguir, ação de abrir/fechar o modal adicionando classe de estilização para demonstração/ocultação e removendo a classe para ocultação/demonstração, respectivamente, conforme estilização (CSS)
        openBtn.onclick = () => {
            navBarMbl.classList.remove("closed");
            navBarMbl.classList.add("navlist");
        };
        closeBtn.onclick = () => {
            navBarMbl.classList.remove("navlist");
            navBarMbl.classList.add("closed");
        };
    }

    // Função para ativar formulário de cadastro ou login
    function toggleForm() {
        const loginForm = document.querySelector(".login");
        const registerForm = document.querySelector(".register");

        loginForm.style.display =
            loginForm.style.display === "none" ? "block" : "none";
        registerForm.style.display =
            registerForm.style.display === "none" ? "block" : "none";
    }

    // Função para mudar o formulário de tela de login para tela de cadastro
    function setupFormToggle() {
        document
            .getElementById("signup-link")
            .addEventListener("click", function (event) {
                event.preventDefault();
                toggleForm();
            });
        document
            .getElementById("login-link")
            .addEventListener("click", function (event) {
                event.preventDefault();
                toggleForm();
            });
    }

    // EM BREVE
    // Função para verificar cadastro ou login e de fato entrar ou registrar a conta

    // Chama previamente tais funções não seja necessário aguardar o chamado após o carregamento da página (pois desta última forma, precisaria clicar duplamente, no caso da barra de navegação)
    setupNavbarMBL();

    // Para que a função de trocar tela de login para tela de cadastro e vice-versa ocorra somente caso o endereço seja para a página de login
    if (window.location.pathname === "/sign-in.html") setupFormToggle();
});
