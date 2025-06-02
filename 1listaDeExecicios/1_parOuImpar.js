/*1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.*/

const prompt = require('prompt-sync')()

let numero = parseInt(prompt('Insira aqui seu número: '));

console.log(numero);

if(numero % 2 === 0){
    console.log('Número é par');
    
}else{
    console.log('É ímpar');
    
}
