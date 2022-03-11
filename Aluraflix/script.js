// var filmes = ["https://vortexcultural.com.br/images/2021/05/milagre-na-cela-7.jpg",
// "https://leiturafilmica.com.br/wp-content/uploads/2021/05/mucize-poster.jpg",
// "https://br.web.img3.acsta.net/medias/nmedia/18/92/29/05/20190815.jpg",
// "https://br.web.img2.acsta.net/medias/nmedia/18/86/96/34/20028591.jpg",
// "https://blog.facens.br/wp-content/uploads/2021/10/Lion-Uma-Jornada-para-Casa.jpg"];

// for (var i = 0; i < filmes.length; i++){
// document.write("<img src=" + filmes[i] +  ">")
// }

function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(filmeFavorito)
    } else {
        console.error("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
}


function listarFilmesNaTela(filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}