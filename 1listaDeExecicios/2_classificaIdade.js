/* Crie um programa que classifica a idade de uma pessoa em categorias(criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else. */

const prompt = require('prompt-sync')()

let idade = parseInt(prompt('Digite sua idade: '))

/* Crianças: Do nascimento até os 14 anos.
Jovens: De 15 a 24 anos.
Adultos: De 25 a 64 anos.
Idosos: A partir dos 65 anos.  */

if (idade > 0 && idade <= 14) {
    console.log('CRIANÇA');
} else if (idade <= 24) {
    console.log('JOVEM');
} else if(idade <= 64){
    console.log('ADULTO');    
}else{
    console.log('IDOSO');    
}