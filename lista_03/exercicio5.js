const leia = require("readline-sync");

let matriz = Array(3);

let linha,
  coluna,
  diagonalPrincipal = [],
  diagonalSecundaria = [],
  somaDiagonalSecundaria = 0,
  somaDiagonalPrincipal = 0;
  
for (let i = 0; i < matriz.length; i++){
    matriz[i] = Array(3);
    
}
console.log(matriz)


for (linha = 0; linha < matriz.length; linha++) {
  for (coluna = 0; coluna < matriz.length; coluna++) {
      matriz[linha][coluna] = leia.questionInt(`Insira o numero: `)

    }
}
diagonalPrincipal.unshift(matriz[0][0], matriz[1][1], matriz[2][2])
diagonalSecundaria.unshift(matriz[0][2],matriz[1][1],matriz[2][0])

for (let i = 0; i < diagonalPrincipal.length; i++){
  somaDiagonalPrincipal+=diagonalPrincipal[i]
  somaDiagonalSecundaria+=diagonalSecundaria[i]
}

console.table(matriz)

console.log(`Elementos da Diagonal Principal:  ${diagonalPrincipal}`);
console.log(`Elementos da Diagonal Secundária:  ${diagonalSecundaria}`);
console.log(
  `A soma de todos os elementos da Diagonal Principal:  ${somaDiagonalPrincipal}`);
console.log(
  `A soma de todos os elementos da Diagonal Secundária:  ${somaDiagonalSecundaria}`);
