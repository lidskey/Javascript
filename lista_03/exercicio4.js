const leia = require("readline-sync");

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6], num;

num = leia.questionInt("Digite o número que você deseja encontrar: ");

for (let pesquisador = 0; pesquisador < 9; pesquisador++) {
  if (vetor[pesquisador] == num) {
    console.log(` O número ${num} está localizado na posição: ${pesquisador}`);
  } 
} if (num > 9) {
  console.log(`O número ${num} não foi encontrado! `);
  
}
