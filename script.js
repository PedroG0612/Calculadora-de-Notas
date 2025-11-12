const inputNome = document.getElementById("nome")
const inputLicao = document.getElementById("licao")
const inputNota = document.getElementById("nota")
const resultado = document.getElementById("resultados")
const notas = document.getElementById("notas")
const botao = document.getElementById("botao")



botao.addEventListener("click", () => {
    const aluno = document.createElement("p")
    aluno.textContent = inputNome.value
    const atividade = document.createElement("p")
    atividade.textContent = inputLicao.value
    const nota = document.createElement("p")
    nota.textContent = inputNota.value
    resultado.appendChild(aluno)
    resultado.appendChild(atividade)
    resultado.appendChild(nota)
})

// const nota = inputNota.value.map(p => Number(p.trim()));
//     soma = nota.reduce((nota, acumulo) => nota + acumulo, 0)
//     const media = document.createElement("p")
//     media = soma / nota.length
//     resultado.appendChild(media)