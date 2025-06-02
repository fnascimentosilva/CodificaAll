/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, eR$0,25se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

let qtdMacas = 11
let precoMaca
let valorCompra = 0

if (qtdMacas < 12) {
    precoMaca = 0.3
    valorCompra = precoMaca * qtdMacas
    console.log(`Valor total da compra: R$ ${valorCompra}`);


} else {
    precoMaca = 0.25
    valorCompra = precoMaca * qtdMacas
    console.log(`Valor total da compra: R$ ${valorCompra}`);
}