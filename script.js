const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternantivas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector("texto-resultado");

const perguntas = [
    {

        enunciado: "Pergunta 1",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
    {
        enunciado: "Pergunta 2",
        alternativas: [ 
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
    {
        enunciado: "Pergunta 3",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
        }
    {
        enunciado: "Pergunta 4",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
    {
        enunciado: "Pergunta 5",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas(atual);
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}
function mostraAlternativa(){
    for (const alternantiva of perguntaAtual.alternantivas){
        const botaoAlternativas = document.createElement("botton");
        botaoAlternativas.textContent = alternantiva;
        caixaAlternantivas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();