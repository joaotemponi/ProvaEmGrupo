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

const teclado = require(`prompt-sync`)();

let pInicial : string = teclado(`Quer iniciar a soma? (s/n)`);
if(pInicial == `s`){
    while(true){
        let n1 : number = parseFloat(teclado(`Digite um número: `));
        let n2 : number = parseFloat(teclado(`Digite outro número: `));
        let soma : number = n1 + n2
        console.log(`O resultado da soma é: ${soma}`);
        let pFinal : string = teclado(`Quer continuar a soma?`);
        if(pFinal == `s`){
    
        }
        else {
            break;
        }
    }
}
else {
    console.log(`Até a proxima!!`);
}
