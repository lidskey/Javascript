const leia = require("readline-sync");

let idade,
  genero,
  pessoaBackend = 0,
  mulherFrontEnd = 0;
homemMobile = 0;
nBinarioFullStack = 0;
contCadastro = 0;
soma = 0;

let continua = true;

//fazer trues e falses ///se mCis escolher 1 e a opção for frontend devera sair cis + frontend

console.log("Bem vinde à nossa pesquisa!");

while (continua == true) {
  contCadastro++;
  idade = leia.questionInt("Idade: ");
  console.log("\n");

  console.log("Escolha o gênero: ");
  console.log("1 ------ Mulher Cis");
  console.log("2 ------ Homem Cis");
  console.log("3 ------ Não Binário");
  console.log("4 ------ Mulher Trans");
  console.log("5 ------ Homem Trans");
  console.log("6 ------ Outros");
  genero = leia.questionInt("Identidade de gênero: ");
  console.log(`${genero}\n`);

  console.log("1 ------ Backend");
  console.log("2 ------ Frontend");
  console.log("3 ------ Mobile");
  console.log("4 ------ FullStack");
  dev = leia.questionInt("Pessoa Desenvolvedora: ");
  console.log("\n");

  continua = leia.keyInYNStrict("Deseja continuar a pesquisa? ");

  if (dev == 1) {
    pessoaBackend++;
  }
  if ((genero == 1 || genero == 4) && dev == 2) {
    //se a pessoa colocar 1 ela entra nesssa condição independente da profissão

    mulherFrontEnd++;
  }

  if ((genero == 2 || genero == 5) && dev == 3 && idade > 40) {
    //3 verificações
    homemMobile++;
  }

  if (genero == 3 && dev == 4 && idade < 30) {
    nBinarioFullStack++;
  }

  soma += idade;
}

media = soma / contCadastro;

console.log(` Total de pessoas desenvolvedoras Backend: ${pessoaBackend}`);
console.log(
  ` Total de mulheres Cis e Trans desenvolvedoras Frontend: ${mulherFrontEnd}`
);
console.log(
  ` Total de Homens Cis e Trans desenvolvedores Mobile acima de 40 anos: ${homemMobile}`
);
console.log(
  ` Total de pessoas Não Binarias desenvolvedores Fullstack menores de 30 anos: ${nBinarioFullStack}`
);
console.log(
  ` O numero total de pessoas que responderam à pesquisa: ${contCadastro}`
);
console.log(
  ` A média de idade das pessoas que responderam à pesquisa: ${media}`
);
