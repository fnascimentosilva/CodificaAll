function contarVogais(texto) {
    const vogais = texto.match(/[aeiouáéíóúàèìòùâêîôûãõ]/gi);
    return vogais ? vogais.length : 0;
  }
  
  console.log(contarVogais("Olá, mundo!"));