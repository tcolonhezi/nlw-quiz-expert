const perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: ["let myVar = 10;", "variable myVar = 10;", "var myVar = 10;"],
    correta: 2,
  },
  {
    pergunta: "Qual é a função do método 'querySelector'?",
    respostas: [
      "Selecionar um elemento por sua classe.",
      "Selecionar um elemento por seu ID.",
      "Selecionar um elemento por sua tag.",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é a saída do seguinte código: console.log(1 + '2' + 3 + 4);?",
    respostas: ["1234", "10", "Error"],
    correta: 0,
  },
  {
    pergunta: "Qual é o resultado da expressão: 5 == '5'?",
    respostas: ["true", "false", "Error"],
    correta: 0,
  },
  {
    pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
    respostas: [
      "Adicionar uma classe a um elemento.",
      "Adicionar um evento a um elemento.",
      "Adicionar um atributo a um elemento.",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é o operador lógico 'e' em JavaScript?",
    respostas: ["||", "&&", "!"],
    correta: 1,
  },
  {
    pergunta: "Qual é a forma correta de comentar uma linha em JavaScript?",
    respostas: ["// Comentário", "/* Comentário */", "<!-- Comentário -->"],
    correta: 0,
  },
  {
    pergunta: "Qual é a função do método 'push' em um array em JavaScript?",
    respostas: [
      "Adicionar um elemento no início do array.",
      "Adicionar um elemento no final do array.",
      "Remover um elemento do array.",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é a saída do seguinte código: console.log(typeof(1));?",
    respostas: ["number", "string", "boolean"],
    correta: 0,
  },
  {
    pergunta: "Qual é a função do método 'parseInt' em JavaScript?",
    respostas: [
      "Converter uma string em um número inteiro.",
      "Converter um número em uma string.",
      "Converter uma string em um número decimal.",
    ],
    correta: 0,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const quiz = document.querySelector("#quiz");
  const template = document.querySelector("template");
  const corretas = new Set();
  const totalDePerguntas = perguntas.length;
  const mostrarTotal = document.querySelector("#acertos span");

  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true);
    quizItem.querySelector("h3").textContent = item.pergunta;

    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector("dl dt").cloneNode(true);
      dt.querySelector("span").textContent = resposta;
      dt.querySelector("input").value = item.respostas.indexOf(resposta);
      dt.querySelector("input").name = "pergunta-" + perguntas.indexOf(item);

      dt.querySelector("input").onchange = (event) => {
        {
          event.target.value == item.correta
            ? (corretas.add(item),
              dt.querySelector("span").classList.add("respostaCorreta"))
            : (corretas.delete(item),
              dt.querySelector("span").classList.add("respostaErrada"));
        }
        mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
      };

      quizItem.querySelector("dl").appendChild(dt);
    }
    quizItem.querySelector("dl dt").remove();

    quiz.appendChild(quizItem);
  }
});
