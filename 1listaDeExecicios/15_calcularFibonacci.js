/* 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for */

let sequenciaFibonacci = []

for (let i = 0; i < 10; i++) {
    let numero
    if (i <= 1) {
        numero = i
    } else {
        numero = sequenciaFibonacci[i -1] + sequenciaFibonacci[i - 2]
    }
    sequenciaFibonacci.push(numero)
}

console.log(sequenciaFibonacci);
