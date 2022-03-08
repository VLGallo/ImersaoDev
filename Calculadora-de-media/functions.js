var notaPrimeiroBimestre = 7;
var notaSegundoBimestre = 4;
var notaTerceiroBimestre = 3;
var notaQuartoBimestre = 8;
var media = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre)/4;
var resultado = "";

if (media >= 5){
    resultado = "O aluno foi aprovado com " + media.toFixed(1);
} else {
   resultado = "O aluno foi reprovado com " + media.toFixed(1);
}

const exibirMedia = document.querySelector(".media");
const p = document.createElement("p");
p.innerText = resultado;
exibirMedia.appendChild(p);