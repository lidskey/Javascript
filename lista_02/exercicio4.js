const leia = require('readline-sync')

let numero1, numero2, codigo;

numero1 = leia.questionFloat("Digite o 1 numero: ")
numero2 = leia.questionFloat("Digite o 2 numero: ")
codigo = leia.questionInt("Operacao: ")

switch(codigo){
    case 1: 
        console.log(`${numero1} + ${numero2} = ${(numero1 + numero2).toFixed(1)}`)
        break;
    case 2:
        console.log(`${numero1} - ${numero2} = ${(numero1 - numero2).toFixed(1)}`)
    break;   

    case 3:
        console.log(`${numero1} * ${numero2} = ${(numero1 * numero2).toFixed(1)}`)
    break;

    case 4:
        console.log(`${numero1} / ${numero2} = ${(numero1 / numero2).toFixed(1)}`)
    break;   

    default:
        console.log("Opção inválida! ")


}