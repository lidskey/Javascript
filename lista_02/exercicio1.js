const leia = require('readline-sync')

let numero;

numero = leia.questionInt("\nDigite um numero: ")


if(numero % 2 == 0 && numero > 0){
    console.log(`\n O número ${numero} é par e positivo! `)

}else if(numero % 2 !== 0 && numero < 0){
    console.log(`\n O número ${numero} é ímpar e negativo!`)

}else if(numero % 2== 0 && numero < 0){
    console.log(`\n O número ${numero} é par e negativo! `)

}else if(numero % 2 !== 0 && numero > 0){
    console.log(`\n O número ${numero} é ímpar e positivo! `)

}