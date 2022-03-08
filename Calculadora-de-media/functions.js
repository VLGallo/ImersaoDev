var notaPrimeiroBimestre = parseFloat(prompt("Digite a nota do primeiro semestre"));
var notaSegundoBimestre = parseFloat(prompt("Digite a nota do segundo semestre"));
var notaTerceiroBimestre = parseFloat(prompt("Digite a nota do terceiro semestre"));
var notaQuartoBimestre = parseFloat(prompt("Digite a nota do quarto semestre"));
var media = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;
var resultado = "";

if (media >= 5) {
    resultado = "O aluno foi aprovado com " + media.toFixed(1);
} else {
    resultado = "O aluno foi reprovado com " + media.toFixed(1);
}

const exibirMedia = document.querySelector(".media");
const p = document.createElement("p");
p.innerText = resultado;
exibirMedia.appendChild(p);