let nota1 = 10
let nota2 = 20

let media = (nota1 + nota2) / 2

const prompt = require('prompt-sync')()

let opcao = parseInt(prompt('Escolhe uma opção (1 - Mostrar média, 2 - Verificar aprovação): '));

switch (opcao) {
    case 1:
        console.log(media);
        break
    case 2:
        if (media >= 60) {
            console.log('Aprovado');

        } else {
            console.log('Reprovado');

        }
        break

    default:
        console.log('Voce nao escolheu uma opcao válida');


}