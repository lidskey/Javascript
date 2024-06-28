const leia = require("readline-sync");

//Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6)
// e a quantidade comprada deste item (número inteiro). A seguir, mostre na tela o valor total
// da conta e o nome do produto que foi comprado.

let codigo, valorTotal, quantidade;

//preco = leia.questionFloat(`${codigo} + ${preco}`)

console.log("1 -- Cachorro Quente --> R$10.00");
console.log("2 -- X-Salada --> R$ 15.00");
console.log("3 -- X-Bacon --> R$ 18.00");
console.log("4 -- Bauru --> R$ 12.00");
console.log("5 -- Refrigerante --> R$ 8.00");
console.log("6 -- Suco de laranja --> R$ 13.00");

codigo = leia.questionInt("\n Digite o código do produto entre 1 a 6: ");

quantidade = leia.questionInt("\n Digite a quantidade: ");

switch (codigo) {
  case 1:
    console.log("\n Produto: Cachorro Quente");
    valorTotal = quantidade * 10;
    console.log(`\n Valor Total: R$ ${valorTotal}`);
    break;
  case 2:
    console.log("\n Produto:  X-Salada");
    valorTotal = quantidade * 15;
    console.log(`\n Valor Total: R$ ${valorTotal}`);
    break;
  case 3:
    console.log("\n Produto: X-Bacon");
    valorTotal = quantidade * 18;
    console.log(`\n Valor Total: R$ ${valorTotal}`);
    break;
  case 4:
    console.log("\n Produto: Bauru");
    valorTotal = quantidade * 12;
    console.log(`\n Valor Total: R$ ${valorTotal}`);
    break;

  case 5:
    console.log("\n Produto: Refrigerante");
    valorTotal = quantidade * 8;
    console.log(`\n Valor Total: R$ ${valorTotal}`);
    break;

  case 6:
    console.log("\n Produto: Suco de laranja");
    valorTotal = quantidade * 13;
    console.log(`\n Valor Total: R$ ${valorTotal}`);
    break;

  default:
    console.log("\n Não temos essa opção em nosso menu.");
}

//valorTotal = leia.questionFloat("\n Valor total: R$")
