// Crie um array chamado 'numeros' contendo 10 valores numéricos à sua escolha.

// Use métodos de array para calcular:

// A soma de todos os elementos.

// A média dos elementos.

// Gere um novo array chamado pares que contenha apenas os números pares de numeros.

// Imprima no console:

// O array original 'numeros'

// A soma

// A média

// O array pares

let numeros = Array(10,3,5,3,5,3,2,1,1,4)


/* for(let i = 0; i < numeros.length; i++){
    soma += numeros[i]
    
}
 */

const soma = numeros.reduce((acumulador, valor) =>   acumulador + valor, 0)
const media = soma/numeros.length

const pares = numeros.filter(num => num % 2 === 0)

console.table(numeros)
console.log(soma)
console.log(media)
console.table(pares)


//ordenar um array de forma crescente

/* let numeros = [3, 2, 7, 19, 6, 4, 2, 10] */
let n = numeros.length

for(let i = 0; i < n - 1; i++){
    for(let j = 0; j < n - 1 - i; j++){
        if(numeros[j] > numeros[j + 1]) {
            const temp = numeros[j]
            numeros[j] = numeros[j + 1]
            numeros[j + 1] = temp
        }
    }
}

console.table(numeros)

