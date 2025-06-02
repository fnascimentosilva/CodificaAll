/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada */


const prompt = require('prompt-sync')();

function exibirMenu() {
    console.log("\n--- Menu Interativo ---");
    console.log("1. Sanduíche");
    console.log("2. Batata frita");
    console.log("3. Refrigerante");
    console.log("0. Sair");
    console.log("----------------------");
}

function executarOpcao(opcao) {
    switch (opcao) {
        case 1:
            console.log("\nVocê selecionou Saduíche.");
            
            console.log("Dirija-se ao caixa para efetuar o pagamento...");
            break;
        case 2:
            console.log("\nVocê selecionou batata frita.");
            
            console.log("Dirija-se ao caixa para efetuar o pagamento...");
            break;
        case 3:
            console.log("\nVocê selecionou refrigerante.");
          
            console.log("Dirija-se ao caixa para efetuar o pagamento...");
            break;
        case 0:
            console.log("\nSaindo do menu. Até a próxima!");
            return true; // Indica que o usuário quer sair
        default:
            console.log("\nOpção inválida. Por favor, escolha uma opção do menu.");
    }
    return false; // Indica que o usuário não quer sair
}

function iniciarMenu() {
    let sair = false;
    while (!sair) {
        exibirMenu();
        const escolha = parseInt(prompt("Escolha uma opção: "));

        if (!isNaN(escolha)) {
            sair = executarOpcao(escolha);
        } else {
            console.log("\nEntrada inválida. Por favor, digite um número.");
        }
    }
}

// Inicia o menu interativo
iniciarMenu();