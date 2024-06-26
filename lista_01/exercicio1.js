const leia = require('readline-sync');
let salario;
let abono;
let novoSalario = salario + abono;

salario = leia.questionFloat("\n Digite o salario: ")
console.log("\nO salário é: " + salario.toFixed(2))
abono = leia.questionFloat("\n Digite o abono: ")
console.log("\nO abono foi de: " + abono.toFixed(2))



console.log("O novo salário é: " + (salario + abono).toFixed(2));


