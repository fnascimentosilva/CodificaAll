/* 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for */

const prompt = require('prompt-sync')()

let numero

while(true){
    const inputNumero = parseInt(prompt('Escolha um numero de 1 a 10 pra gerar a tabuada: '))
    if(!isNaN(inputNumero) && inputNumero >= 1 && inputNumero <= 10){
        numero = inputNumero
        break
    }else{
        console.log('Por favor, digite um número válido entre 1 e 10.');
    }
}

let operacao
while (true) {
    const inputOperacao = parseInt(prompt('Escolha a operacao a ser feita\n 1 - ADICAO | 2 - SUBTRACAO | 3 - MULTIPLICACAO | 4 - DIVISAO '))
    if ([1, 2, 3, 4].includes(inputOperacao)) {
        operacao = inputOperacao
        break
    } else {
        console.log('Operação inválida. Por favor, escolha entre 1 e 4.');
    }
}

let calcularTabuada = (num, operacao) => {
    
   

    if (operacao === 1) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} + ${i} = ${num + i}`);

        }
    } else if (operacao === 2) {
        for (let i = num; i <= 10; i++) {
            console.log(`${i} - ${num}= ${i - num}`);

        }
    } else if (operacao === 3) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} X ${i} = ${num * i}`);

        }
    } else if (operacao === 4) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${num*i} / ${num} = ${(num*i) / num}`);

        }
    } else {
        console.log('Operacao inválida');

    }
}

calcularTabuada(numero, operacao)
