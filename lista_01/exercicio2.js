const leia = require('readline-sync');

let nota1, nota2, nota3, nota4;
let mediaFinal;
let calculoMedia;



nota1 = leia.questionFloat("\n Digite a nota 1: ")
console.log("\n Nota 1: " + nota1)

nota2 = leia.questionFloat("\n Digite a nota 2: ")
console.log("\n Nota 2: " + nota2)

nota3 = leia.questionFloat("\n Digite a nota 3: ")
console.log("\n Nota 3: " + nota3)

nota4 = leia.questionFloat("\n Digite a nota 4: ")
console.log("\n Nota 4: " + nota4)

calculoMedia = (nota1 + nota2 + nota3 + nota4) / 4

mediaFinal = calculoMedia;

console.log("\n Média final: " + mediaFinal)





