/*
Nome 1:João Pedro Temponi de Jesus
Nome 2:Cláudio Gabriel Gonçalves Batista
Nome 3:Lucas Henrique Soares de Oliveira
Nome 4:Davi Emanoel Baptista Furlan
Nome 5:Murilo de Souza Soares Lima

4 - Escreva um programa que leia as medidas dos lados de um triângulo e
escreva se ele é Equilátero, isósceles ou Escaleno. Sendo que:
− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isóscele: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes.

(10 pontos)
*/
console.clear();
var teclado = require("prompt-sync")();
var a1 = parseFloat(teclado("Digite o valor do primeiro lado: "));
var a2 = parseFloat(teclado("Digite o valor do segundo lado: "));
var a3 = parseFloat(teclado("Digite o valor do terceiro lado: "));
if (a1 == a2 && a2 == a3) {
    console.log("\u00C9 um tri\u00E2ngulo Equil\u00E1tero");
}
else {
    if (a1 == a2 || a2 == a3) {
        console.log("\u00C9 um tri\u00E2ngulo Is\u00F3sceles");
    }
    else {
        if (a1 != a2 && a1 != a3 && a2 != a3) {
            console.log("\u00C9 um tri\u00E2ngulo Escaleno");
        }
        else {
            console.log("Algo deu errado");
        }
    }
}
