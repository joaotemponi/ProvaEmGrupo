/*
Nome 1:João Pedro Temponi de Jesus
Nome 2:Cláudio Gabriel Gonçalves Batista
Nome 3:Lucas Henrique Soares de Oliveira
Nome 4:Davi Emanoel Baptista Furlan
Nome 5:Murilo de Souza Soares Lima

7- Faça um aplicativo que ao pedir dois números efetue a soma,
   e pergunte se ele quer continuar calculando, caso sim volte
   a perguntar os números a ser somados, caso não o aplicativo
   é finalizado.  (10 pontos)
*/
var teclado = require("prompt-sync")();
var pInicial = teclado("Quer iniciar a soma? (s/n)");
if (pInicial == "s") {
    while (pInicial) {
        var n1 = parseFloat(teclado("Digite um n\u00FAmero: "));
        var n2 = parseFloat(teclado("Digite outro n\u00FAmero: "));
        var soma = n1 + n2;
        console.log("O resultado da soma \u00E9: ".concat(soma));
        var pFinal = teclado("Quer continuar a soma?");
        if (pFinal == "s") {
        }
        else {
            break;
        }
    }
}
else {
    console.log("At\u00E9 a proxima!!");
}
