var cartas = [
    {
        nome: "Mickey",
        imagem: "https://swall.teahub.io/photos/small/81-816245_papel-de-parede-mickey-mouse.jpg",
        atributos: {
            ataque: 4,
            defesa: 6,
            velocidade: 6,
            magia: 10,
            amor: 7
        }
    },
    {
        nome: "Donald",
        imagem: "https://p4.wallpaperbetter.com/wallpaper/675/247/729/donald-duck-cartoon-reading-book-desktop-hd-wallpaper-for-tablet-and-pc-2560%C3%971600-wallpaper-preview.jpg",
        atributos: {
            ataque: 9,
            defesa: 5,
            velocidade: 7,
            magia: 2,
            amor: 1
        }
    },
    {
        nome: "Minnie",
        imagem: "https://a-static.mlcdn.com.br/1500x1500/painel-de-festa-minnie-rosa-02-colormyhome/colormyhome/1675/fc52936ae934c55312dee87389b88e72.jpg",
        atributos: {
            ataque: 4,
            defesa: 5,
            velocidade: 6,
            magia: 8,
            amor: 9
        }
    },
    {
        nome: "Pateta",
        imagem: "https://img.olhardigital.com.br/wp-content/uploads/2021/05/Pateta.jpg",
        atributos: {
            ataque: 7,
            defesa: 8,
            velocidade: 5,
            magia: 6,
            amor: 5
        }
    },
    {
        nome: "Pluto",
        imagem: "https://wallpaperaccess.com/full/2450471.jpg",
        atributos: {
            ataque: 6,
            defesa: 10,
            velocidade: 8,
            magia: 6,
            amor: 8
        }
    },
    {
        nome: "Margarida",
        imagem: "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-j54fnv_6fb8fb8d.jpeg?region=0,0,600,600",
        atributos: {
            ataque: 9,
            defesa: 3,
            velocidade: 7,
            magia: 3,
            amor: 8
        }
    }
];
var cartaPC;
var cartaJogador;

function sortearCarta() {
    var indiceCartaPc = parseInt(Math.random() * 6);
    cartaPC = cartas[indiceCartaPc];


    var indiceCartaJogador = parseInt(Math.random() * 6);
    while (indiceCartaPc == indiceCartaJogador) {
        indiceCartaJogador = parseInt(Math.random() * 6);
    }
    cartaJogador = cartas[indiceCartaJogador];
    console.log(cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirCartaJogador()
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
    var divResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaPc = cartaPC.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaPc) {
        htmlResultado = "<p class='resultado-final'>Venceu!</p>";
    } else if (valorCartaJogador < valorCartaPc) {
        htmlResultado = "<p class='resultado-final'>Perdeu!</p>";
    } else {
        htmlResultado = "<p class='resultado-final'>Empate!</p>";
    }
    divResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaPC()
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    /*  outra opção:   divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"  */
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style = " width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaPC() {
    var divCartaPC = document.getElementById("carta-pc");
    divCartaPC.style.backgroundImage = `url(${cartaPC.imagem})`;
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style = " width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaPC.atributos) {
        opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " " + cartaPC.atributos[atributo] + "</p>";
    }

    var nome = `<p class="carta-subtitle">${cartaPC.nome}</p>`;
    divCartaPC.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";

}