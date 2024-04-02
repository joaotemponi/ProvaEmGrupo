/*
Nome 1:João Pedro Temponi de Jesus
Nome 2:Cláudio Gabriel Gonçalves Batista
Nome 3:Lucas Henrique Soares de Oliveira
Nome 4:Davi Emanoel Baptista Furlan
Nome 5:Murilo de Souza Soares Lima

5 -O IMC (índice de massa corpórea) indica o grau de obesidade de uma pessoa. 
Este índice é obtido pelo peso (em Kg) dividido pelo quadrado da altura 
(em metros). A tabela a seguir apresenta as faixas deste índice: 
 __________________________________________
|====== IMC ======= |===== Avaliação ===== |
| Menor que 18,5    | Baixo peso           |
| De 18,5 a 24,99   | Normal               |
| De 25 a 29,99     | Sobrepeso            |
| Maior que 30      | Obesidade            |
|___________________|______________________|

(25 pontos)
*/

const teclado = require(`prompt-sync`)();

console.log(`____________________________________________`);
console.log(`|====== IMC ======= |===== Avaliação ===== |`);
console.log(`| Menor que 18,5    |      Baixo peso      |`);
console.log(`| De 18,5 a 24,99   |        Normal        |`);
console.log(`| De 25 a 29,99     |      Sobrepeso       |`);
console.log(`| Maior que 30      |      Obesidade       |`);
console.log(`|___________________|______________________|`);

let altura : number = parseFloat(teclado(`Digite sua altura: `));
let peso : number = parseFloat(teclado(`Digite seu peso: `));
let imc : number = (peso / (altura * altura));
if(imc < 18.5){
    console.log(`Baixo peso!!`);
}
else if(imc <= 24.99 && imc > 18.5){
    console.log(`Normal!!`);
}
else if(imc > 25 && 29.99){
    console.log(`Sobrepeso!!`);
}
else if(imc >= 30){
    console.log(`Obeso!`);
}
else{
    console.log(`Algo deu erro!!`);
}


