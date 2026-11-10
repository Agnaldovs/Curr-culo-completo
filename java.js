
// BOTÕES

const botaoEditar = document.querySelector("#editar");
const botaoSair = document.querySelector("#sair");
const botaoCancelar = document.querySelector("#cancelar");

// FORMULÁRIO

const formulario = document.querySelector("#formperfil");
const areaFormulario = document.querySelector("#areaformulario");

// CAMPOS

const nome = document.querySelector("#nome");
const curso = document.querySelector("#curso");
const email = document.querySelector("#email");
const cidade = document.querySelector("#cidade");
const descricao = document.querySelector("#descricao");

// PERFIL

const perfilNome = document.querySelector("#perfilnome");
const perfilCurso = document.querySelector("#perfilcurso");
const perfilEmail = document.querySelector("#perfilemail");
const perfilCidade = document.querySelector("#perfilcidade");
const perfilDescricao = document.querySelector("#perfildescricao");

// EDITAR

botaoEditar.addEventListener("click", function () {

    nome.value = perfilNome.textContent;
    curso.value = perfilCurso.textContent;
    email.value = perfilEmail.textContent;
    cidade.value = perfilCidade.textContent;
    descricao.value = perfilDescricao.textContent;

    areaFormulario.style.display = "block";

});

// SALVAR

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    perfilNome.textContent = nome.value;
    perfilCurso.textContent = curso.value;
    perfilEmail.textContent = email.value;
    perfilCidade.textContent = cidade.value;
    perfilDescricao.textContent = descricao.value;

    areaFormulario.style.display = "none";

    alert("Perfil atualizado com sucesso!");

});

// CANCELAR

botaoCancelar.addEventListener("click", function () {

    areaFormulario.style.display = "none";

});

// SAIR

botaoSair.addEventListener("click", function () {

    const resposta = confirm("Deseja sair do perfil?");

    if (resposta) {
        alert("Você saiu do perfil!");
        window.location.href = "about:blank";
    }

});
