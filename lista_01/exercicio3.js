const leia = require('readline-sync')

let salarioBruto, adicionalNoturno, horasExtras; 
let descontos, salarioLiquido;


salarioBruto = leia.questionFloat("\n Digite o Salário Bruto: ")


adicionalNoturno = leia.questionFloat("\n Digite o Adicional Noturno: ")


horasExtras = leia.questionFloat("\n Digite as Horas Extras: ")


descontos = leia.questionFloat("\n Digite os Descontos: ")




console.log("\n Salário Bruto: " + salarioBruto.toFixed(2))
console.log("\n Adicional Noturno: " + adicionalNoturno.toFixed(2))
console.log("\n Horas Extras: " + horasExtras.toFixed(2))
console.log("\n Descontos: " + descontos.toFixed(2))

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("\n O Salário Líquido é: " + salarioLiquido.toFixed(2))