/*
Nome 1:João Pedro Temponi de Jesus
Nome 2:Cláudio Gabriel Gonçalves Batista
Nome 3:Lucas Henrique Soares de Oliveira
Nome 4:Davi Emanoel Baptista Furlan
Nome 5:Murilo de Souza Soares Lima

1- Faça um programa que peça um número inteiro e 
determine se ele é par ou ímpar. (10 pontos)
*/

const teclado = require(`prompt-sync`)();

let divisor : number = 2;
let dividendo : number = parseFloat(teclado(`Digite um número`));
let resto : number = 0;

resto = dividendo % divisor;

if (resto == 0){
    console.log(`Número digitado ${dividendo} é par!`);
}
else if (resto == 1){
    console.log(`Número digitado ${dividendo} é ímpar!!`);
}
else{
    console.log(`Algo deu errado!!`);
}