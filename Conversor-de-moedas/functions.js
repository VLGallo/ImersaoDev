function Converter() {
    var valorElemento = document.getElementById("valor");
    var valorNumerico = parseFloat(valorElemento.value);
    var dolarEmReal = valorNumerico * 5.09;
    var elementoConversao = document.getElementById("valorConvertido");
    var resultado = " O resultado em real hoje é R$ " + dolarEmReal;
    elementoConversao.innerHTML = resultado;
}
