/* 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes. */

const prompt = require('prompt-sync')()

let numero = parseInt(prompt('Digite um número: '))

let contador = 0

while (contador < 10) {
    console.log(`${numero}`);
    contador++
}
