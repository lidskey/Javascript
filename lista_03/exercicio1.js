const leia = require("readline-sync");

let numero, i, x=0, y=0;


//console.log("\nDigite o 1 numero: ")

//entrada
for (i = 1; i <= 10; i++) {
  numero = leia.questionInt(`Digite o ${i} numero: `);

  if (numero % 2 == 0) {
    x++;
  } else if (numero % 2 == 1) {
    y++;
  }
}
console.log(`O total de pares é: ${x}`);
console.log(`O total de ímpares é: ${y}`);
