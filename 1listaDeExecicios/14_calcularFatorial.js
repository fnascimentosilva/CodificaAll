/* 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
 utilizando um loop for ou while */
const prompt = require('prompt-sync')()
 let numero = Number(prompt('Qual numeor quer calcular o fatorial? '))


 let numeroInicial = numero

 let fatorial = 1

 while(numero > 1){
    fatorial *= numero
    numero = numero -1
 }

 console.log(`O fatorial de ${numeroInicial} é ${Number(fatorial)}`);
 