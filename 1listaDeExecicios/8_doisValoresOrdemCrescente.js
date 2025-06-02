/* 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente */

let valorA = 4
let valorB = 3
let isDiferent = valorA !== valorB

if(isDiferent){
if(valorA < valorB){
    console.log(`[${valorA}, ${valorB}]`);    
}else{
    console.log(`[${valorB}, ${valorA}]`);
}
}else{
    console.log('Os números são iguais');
    
}
