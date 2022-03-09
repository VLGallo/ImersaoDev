var numeroSorteado = parseInt(Math.random() * 11);
var tentativas = 1;

function Chutar() {
    var elementoResultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value);

    if (tentativas < 3) {
        if (chute == numeroSorteado) {
            elementoResultado.innerHTML = "Você acertou";
            return;
        } else if (chute > 10 || chute < 0) {
            elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
        } else {
            if (chute > numeroSorteado) {
                elementoResultado.innerHTML = "Você errou! Seu chute é maior que o número secreto!";
            } else {
                elementoResultado.innerHTML = "Você errou! Seu chute é menor que o número secreto!";
            }
        }
       
    }else{
    elementoResultado.innerHTML = "Você perdeu, acabaram as tentativas.";
    }
    tentativas++;
}