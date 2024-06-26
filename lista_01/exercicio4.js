const leia = require('readline-sync')

let n1, n2, n3, n4;
let neg3= -Math.abs;


n1 = leia.questionFloat("\n Escreva o primeiro número: ")
console.log("\nNúmero 1: " + n1.toFixed(1))

n2 = leia.questionFloat("\n Escreva o segundo número: ")
console.log("\n Número 2: " + n2.toFixed(1))

if(n3 < 0){
    neg3 = leia.questionFloat("\nEscreva o terceiro número: ")
    console.log("\n Número 3: " + neg3.toFixed(1))

}else{
    n3 = leia.questionFloat("\nEscreva o terceiro número: ")
    console.log("\n Número 3: " + n3.toFixed(1))
}

n4 = leia.questionFloat("\nEscreva o quarto número: ")
console.log("\n Número 4: " + n4.toFixed(1))

calculo = (n1 * n2) - (n3 * n4)

console.log("\n Diferença: " + calculo.toFixed(1))