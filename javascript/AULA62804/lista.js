//A turma C é composta de 60 alunos, e a turma D de 20 alunos. Escreva um algoritmo que leia o percentual de alunos reprovados na turma C, o percentual de aprovados na turma D, calcule e escreva:
//a) O número de alunos reprovados na turma C.
//b) O número de alunos reprovados na turma D.
//c) A percentagem de alunos reprovados em relação ao total de alunos das duas turmas.
//[Exemplo de dados de entrada]
//10 (percentual de alunos reprovados na turma C)
//85 (percentual de alunos aprovados na turma D)
//[Saída para os dados de entrada acima]
//6 (quantidade de alunos reprovados na turma C)
//3 (quantidade de alunos reprovados na turma D)
//11.25 (percentual de alunos reprovados em relação ao total de alunos das duas

/* let turmaC = 60
let turmaD = 20 */

//Escreva um algoritmo para repetir a leitura de um número enquanto o valor fornecido for diferente de 0. Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO. Quando o número 0 for fornecido a repetição deve ser encerrada sem imprimir mensagem alguma.
let num

while(num != 0){
    
    let prompt = require('prompt-sync')()
    prompt = ('Digite um numero: ')
    num = prompt
    num > 0 ? console.log('positivo') : console.log('negativo');


}

