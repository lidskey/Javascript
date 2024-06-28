//const math = require('mathjs');
const leia = require("readline-sync");

let nome, idade, doador;

//ter entre 18 e 69 anos
//entre 60 e 69 anos podem somente se não for a primeira doação

//console.log(math.dot());

console.log("\n Seja bem vinde ao Banco de Doação!");
nome = leia.question("\n Digite o nome do doador:  ");
idade = leia.questionInt("\n Digite a idade do doador:  ");
doador = leia.keyInYNStrict("\n Primeira doacao de sangue?");


if (idade <= 59 && idade >= 18) {
  console.log(`\n ${nome} está apta(o) para doar sangue! `);
}
else if (idade >= 60 && idade <= 69 && doador != true) {
  console.log(`\n ${nome} está apta(o) para doar sangue!`);
}else{
    console.log(`\n ${nome} não está apta(o) para doar sangue!`);
}
