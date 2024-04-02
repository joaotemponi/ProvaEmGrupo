/*
Nome 1:João Pedro Temponi de Jesus
Nome 2:Cláudio Gabriel Gonçalves Batista
Nome 3:Lucas Henrique Soares de Oliveira
Nome 4:Davi Emanoel Baptista Furlan
Nome 5:Murilo de Souza Soares Lima

2 - Escreva um programa que receba três números inteiros 
e mostre eles em ordem DECRESCENTE. (10 pontos)
*/

/* (5 pontos)
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno:João Pedro Temponi de Jesus
*/


const teclado = require(`prompt-sync`)();

let n1 : number = parseFloat(teclado(`Digite o primeiro número`));
let n2 : number = parseFloat(teclado(`Digite o segundo número`));
let n3 : number = parseFloat(teclado(`Digite o terceiro número`));

let maior : number = n1;
let mediano : number = n2;
let menor : number = n3;

if (n1 > n2 && n1 > n3){
    maior = n1;

    if(n2>n3){
        mediano = n2;
        menor = n3;
    }
    else{
        mediano=n3;
        menor=n2
    }
}
else if(n2 > n1 && n2 > n3){
    maior = n2

    if(n1>n3){
        mediano = n1;
        menor = n3;
    }
    else{
        mediano = n3;
        menor = n1
    }
}
else{

}
if(n3 > n1 && n3 > n2){
    console.log(`Algo deu errado!!`)
}


console.log(`Números em ordem decreescente: ${maior}, ${mediano} e ${menor}`);



