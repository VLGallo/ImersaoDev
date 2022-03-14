var saoPaulo = {
    nome: "São Paulo",
    vitorias: 2,
    empates: 1,
    derrotas: 1,
    pontos: 0
}

var palmeiras = {
    nome: "Palmeiras",
    vitorias: 4,
    empates: 1,
    derrotas: 2,
    pontos: 0
}

var corinthians = {
    nome: "Corinthians",
    vitorias: 1,
    empates: 0,
    derrotas: 2,
    pontos: 0
}

saoPaulo.pontos = calculaPontos(saoPaulo);
palmeiras.pontos = calculaPontos(palmeiras);
corinthians.pontos = calculaPontos(corinthians);

function calculaPontos(time) {
    var pontos = (time.vitorias * 3) + (time.empates);
    return pontos
}

var times = [saoPaulo, palmeiras, corinthians];

function exibeTimesNaTela(times) {
    var elemento = "";
    for (var i = 0; i < times.length; i++) {
        elemento = elemento + "<tr><td>" + times[i].nome + "</td>";
        elemento += "<td>" + times[i].vitorias + "</td>";
        elemento += "<td>" + times[i].empates + "</td>";
        elemento += "<td>" + times[i].derrotas + "</td>";
        elemento += "<td>" + times[i].pontos + "</td>";
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
        elemento += "<td><button onClick='limpar(" + i + ")'>Limpar</button></td></tr>";
    }

    var tabelaTimes = document.getElementById("tabelaTimes");
    tabelaTimes.innerHTML = elemento;
}

exibeTimesNaTela(times);

function adicionarVitoria(i) {
    var time = times[i];
    time.vitorias++;
    time.pontos = calculaPontos(time);
    exibeTimesNaTela(times);
}

function adicionarEmpate(i) {
    var time = times[i];
    time.empates++;
    time.pontos = calculaPontos(time);
    exibeTimesNaTela(times);
}

function adicionarDerrota(i) {
    var time = times[i];
    time.derrotas++;
    exibeTimesNaTela(times);
}

function limpar(i) {
    times[i].vitorias = 0;
    times[i].derrotas = 0;
    times[i].empates = 0;
    times[i].pontos = 0;
    exibeTimesNaTela(times);
}

function inserirNovoTime() {
    var nome = document.querySelector("#novo");
    var novoNome = nome.value;
    var novoTime = {
        nome: novoNome,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    };

    times.push(novoTime);
    exibirTimesNaTela(times);
    nome.value = "";
}