/* 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números */

const prompt = require('prompt-sync')()

let numeros = []
let somaNumeros = 0
let numero



do {
    numero = parseFloat(prompt('Insira um numero decimal ou digite 0 pra sair: \n'))

    if (numero !== 0) {
        numeros.push(numero)
        somaNumeros += numero
    } 

} while (numero !== 0)

console.log(`Os numeros digitados foram ${numeros}`);
console.log(`A média dos numeros é ${(somaNumeros/numeros.length).toFixed(2)}`);

