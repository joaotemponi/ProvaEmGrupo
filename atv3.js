/*
Nome 1:João Pedro Temponi de Jesus
Nome 2:Cláudio Gabriel Gonçalves Batista
Nome 3:Lucas Henrique Soares de Oliveira
Nome 4:Davi Emanoel Baptista Furlan
Nome 5:Murilo de Souza Soares Lima

3- Faça um programa que pergunte em que turno você estuda.
Peça para digitar M-matutino ou V-Vespertino ou N- Noturno.
Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou
"Boa Noite!" ou "Valor Inválido!", conforme o caso. (10 pontos)
*/
var teclado = require("prompt-sync")();
console.log("Em qual turno voc\u00EA estuda?");
console.log("Matutino > M");
console.log("Vespertino > V");
console.log("Noturno > N");
var p = teclado("");
if (p == "M" || p == "m") {
    console.log("Bom dia!");
}
else if (p == "V") {
    console.log("Boa tarde!");
}
else if (p == "N") {
    console.log("Boa noite!");
}
else {
    console.log("Algo deu erro!");
}
