/* 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
 utilizando um loop for. */

let numeros = []

const prompt = require('prompt-sync')()

let somaNumeros = 0

for (let i = 0; i < 5; i++) {
    numeros.push(parseInt(prompt(`Digite o ${i + 1} numero: `)))
    somaNumeros += numeros[i]
}

console.log(`Os numeros digitados foram ${numeros}`);
console.log(somaNumeros);




