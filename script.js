const inputNome = document.getElementById("nome")
const inputLicao = document.getElementById("licao")
const inputNota = document.getElementById("nota")
const resultado = document.getElementById("resultados")
const mediaArea = document.getElementById("media")
const notas = document.getElementById("notas")
const botaoAdicionar = document.getElementById("botaoAdicionar")
const botaoMedia = document.getElementById("botaoMedia")
const notasArray = []

botaoAdicionar.addEventListener("click", () => {
    const aluno = document.createElement("p")
    aluno.textContent = inputNome.value
    const atividade = document.createElement("p")
    atividade.textContent = inputLicao.value
    const nota = document.createElement("p")
    nota.textContent = Number(inputNota.value)
    resultado.appendChild(aluno)
    resultado.appendChild(atividade)
    resultado.appendChild(nota)
    notasArray.push(Number(inputNota.value))
    console.log(notasArray)
})

botaoMedia.addEventListener("click", () => {
    soma = notasArray.reduce((nota, acumulo) => nota + acumulo, 0)
    const media = document.createElement("p")
    media.textContent = (soma / notasArray.length).toFixed(2)
    valorMedia = (soma / notasArray.length).toFixed(2)
    const aluno = document.createElement("p")
    aluno.textContent = inputNome.value
    mediaArea.appendChild(aluno)
    mediaArea.appendChild(media)
    if (valorMedia >= 7){
        mediaArea.style.backgroundColor = "green"
    }else{
        mediaArea.style.backgroundColor = "red"
    }
})


