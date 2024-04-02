/*
Nome 1:João Pedro Temponi de Jesus
Nome 2:Cláudio Gabriel Gonçalves Batista
Nome 3:Lucas Henrique Soares de Oliveira
Nome 4:Davi Emanoel Baptista Furlan
Nome 5:Murilo de Souza Soares Lima

6- Um posto está vendendo combustíveis com a seguinte tabela de descontos:
    Álcool: até 20 litros, desconto de 3% por litro
    acima de 20 litros, desconto de 5% por litro
    Gasolina:
    até 20 litros, desconto de 4% por litro
    acima de 20 litros, desconto de 6% por litro

Escreva um algoritmo que leia o número de litros vendidos,
o tipo de combustível (codificado da seguinte forma: E-etanol, G-gasolina),
calcule e imprima o valor a ser pago pelo cliente sabendo-se que
o preço do litro da gasolina é R$ 5,58 o preço do litro do
etanol é R$ 3,42.

(25 pontos)
*/
var teclado = require("prompt-sync")();
var precoE = 3.42;
var precoG = 5.58;
var pQuantidade = teclado("Com quantos litros o carro foi abastecido? ");
console.log("".concat(pQuantidade));
if (precoE <= 20) {
}
