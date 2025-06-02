/* 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero 
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B

 Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
 Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
 Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/

let ladoA = 10
let ladoB = 5
let ladoC = 5

let isTriangulo = ladoA < ladoB + ladoC && ladoA + ladoB > ladoC && ladoB < ladoC + ladoA

if (isTriangulo) {
    if (ladoA !== ladoB && ladoB !== ladoC) {
        console.log('As medidas são de um triângulo escaleno!');
    } else if (ladoA === ladoB && ladoB === ladoC) {
        console.log('As medidas são de um triangulo equilátero!');
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log('As medidas são de um triangulo isósceles!');
    } else {
        console.log('As medidas são de um outro tipo de triângulo!');
    }
} else {
    console.log('As medidas não são de um triangulo!');
}
