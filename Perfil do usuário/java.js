const nome = document.querySelector("#nome");
const cidade = document.querySelector("#cidade");

const botaoEditar = document.querySelector("#editar");
const botaoSair = document.querySelector("#sair");

botaoEditar.addEventListener("click", function () {
    const novoNome = prompt("Digite seu nome:");

    if (novoNome !== null && novoNome.trim() !== "") {
        nome.textContent = novoNome.trim();
    }

    const novaCidade = prompt("Digite sua cidade:");

    if (novaCidade !== null && novaCidade.trim() !== "") {
        cidade.textContent = novaCidade.trim();

        document.querySelector(".curriculo p:nth-of-type(3)").textContent =
            "Cidade: " + novaCidade.trim();
    }
});

botaoSair.addEventListener("click", function () {
    const resposta = confirm("Deseja sair do perfil?");

    if (resposta) {
        alert("Você saiu do perfil!");
        window.location.href = "about:blank";
    }
});
