const leia = require("readline-sync");

let numero, soma = 0;

do{

    numero = leia.questionInt("Digite um numero inteiro: ")

    if(numero === 0){
        break;
    }

    if (numero > 0) {
        soma += numero;
    }

} while (true);
console.log(`A soma dos números positivos é: ${soma}`)