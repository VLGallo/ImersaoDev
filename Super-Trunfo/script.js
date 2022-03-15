var cartas = [
    {
        nome: "Mickey",
        atributos: {
            ataque: 4,
            defesa: 6,
            magia: 8,
            amor: 9,
        }
    },
    {
        nome: "Donald",
        atributos: {
            ataque: 7,
            defesa: 2,
            magia: 6,
            amor: 6
        }
    },
    {
        nome: "Pateta",
        atributos: {
            ataque: 8,
            defesa: 4,
            magia: 7,
            amor: 3
        }
    },
    {
        nome: "Margarida",
        atributos: {
            ataque: 10,
            defesa: 3,
            magia: 4,
            amor: 7
        }
    }
];

var cartaPC;
var cartaJogador;

function sortearCarta() {
    var indiceCartaPc = parseInt(Math.random() * 4);
    cartaPC = cartas[indiceCartaPc];


    var indiceCartaJogador = parseInt(Math.random() * 4);
    while (indiceCartaPc == indiceCartaJogador) {
        indiceCartaJogador = parseInt(Math.random() * 4);
    }
    cartaJogador = cartas[indiceCartaJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirOpcoes()
}


function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo")
    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value

        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaPc = cartaPC.atributos[atributoSelecionado];
    if (valorCartaJogador > valorCartaPc) {
        elementoResultado.innerHTML = "Você venceu";
    } else if (valorCartaJogador < valorCartaPc) {
        elementoResultado.innerHTML = "Você perdeu, o valor da carta do adversário é " + cartaPC.atributos[atributoSelecionado];
    } else {
        elementoResultado.innerHTML = "Deu empate";
    }
    console.log(cartaPC)
}