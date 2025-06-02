function numeroAleatorio(numeroMinimo, numeroMaximo) {
    return Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
}

console.log(numeroAleatorio(1, 100));

