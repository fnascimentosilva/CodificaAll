/*  5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
 determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
 utilizando if-else */

/* IMC (kg/m²)	Classificação
De 18,5 a 24,9	Peso normal
De 25 a 29,9	Sobrepeso
De 30 a 34,9	Obesidade grau I
De 35 a 39.9	Obesidade grau II */

const prompt = require('prompt-sync')()



let calcularImc = () => {

    let peso = parseFloat(prompt('Insira aqui seu peso: '))
    let altura = parseFloat(prompt('Insira aqui sua altura: '))
    let imc = peso / (Math.pow(altura, 2))

    if (imc >= 18.5 && imc <= 24.9) {
        console.log(`Seu imc é ${imc.toFixed(2)}, parabéns está tudo normal!`);
    } else if (imc <= 29.9) {
        console.log(`Seu imc é ${imc.toFixed(2)}, você está um pouco acima do peso!`);
    } else if (imc <= 34.9) {
        console.log(`Seu imc é ${imc.toFixed(2)}, Muito cuidado você já está em um nível de obesidade grau I`);
    } else {
        console.log(`Seu imc é ${imc.toFixed(2)}, pare de comer batatas fritas enquanto pode daqui a pouco vai ficar difícill respirar, você já está em um nível de obesidade grau II`);
    }

}


calcularImc()
