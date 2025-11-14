
const inputNome = document.getElementById("nome")
const inputLicao = document.getElementById("licao")
const inputNota = document.getElementById("nota")
const resultado = document.getElementById("resultados")
const mediaArea = document.getElementById("media")
const notas = document.getElementById("notas")
const botaoAdicionar = document.getElementById("botaoAdicionar")
const botaoMedia = document.getElementById("botaoMedia")
const botaoResetar = document.getElementById("botaoResetar")
const notasArray = []


function criarElemento(){
    const nome = document.createElement("p")
    const atividade = document.createElement("p")
    const nota = document.createElement("p")

}

botaoAdicionar.addEventListener("click", callback, () => {
    criarElemento()
    const nome = document.createElement("p")
    nome.textContent = inputNome.value
    const atividade = document.createElement("p")
    atividade.textContent = inputLicao.value
    const nota = document.createElement("p")
    nota.textContent = Number(inputNota.value)
    resultado.appendChild(nome)
    resultado.appendChild(atividade)
    resultado.appendChild(nota)
    notasArray.push(Number(inputNota.value))
    console.log(notasArray)
})

const media = document.createElement("p")
const aluno = document.createElement("p")

botaoMedia.addEventListener("click", () => {
    soma = notasArray.reduce((nota, acumulo) => nota + acumulo, 0)
    media.textContent = (soma / notasArray.length).toFixed(2)
    valorMedia = (soma / notasArray.length).toFixed(2)
    aluno.textContent = inputNome.value
    mediaArea.appendChild(aluno)
    mediaArea.appendChild(media)
    if (valorMedia >= 7){
        mediaArea.style.backgroundColor = "green"
    }else{
        mediaArea.style.backgroundColor = "red"
    }
})


botaoResetar.addEventListener("click", () => {
    mediaArea.removeChild(media)
    mediaArea.removeChild(aluno)
    resultado.removeChild(nome, atividade, nota)
})