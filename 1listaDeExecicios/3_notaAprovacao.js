const prompt = require('prompt-sync')()

let nota = prompt('Insira aqui a sua nota de 0 a 10: ')

if(nota >= 0 && nota <= 10){

if(nota <= 5){
   console.log('Aluno reprovado')
}else if(nota <= 7){
    console.log('Aluno em recuperacão')
}else{
    console.log('Aluno aprovado')
}
}else{
    console.log('Argumento inválido voce deve inserir uma nota entre 0 e 10')
    
}