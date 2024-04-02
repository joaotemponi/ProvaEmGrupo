/*
Nome 1:João Pedro Temponi de Jesus
Nome 2:Cláudio Gabriel Gonçalves Batista
Nome 3:Lucas Henrique Soares de Oliveira
Nome 4:Davi Emanoel Baptista Furlan
Nome 5:Murilo de Souza Soares Lima

1- Faça um programa que peça um número inteiro e
determine se ele é par ou ímpar. (10 pontos)
*/
var teclado = require("prompt-sync")();
var divisor = 2;
var dividendo = parseFloat(teclado("Digite um n\u00FAmero"));
var resto = 0;
resto = dividendo % divisor;
if (resto == 0) {
    console.log("N\u00FAmero digitado ".concat(dividendo, " \u00E9 par!"));
}
else if (resto == 1) {
    console.log("N\u00FAmero digitado ".concat(dividendo, " \u00E9 \u00EDmpar!!"));
}
else {
    console.log("Algo deu errado!!");
}
