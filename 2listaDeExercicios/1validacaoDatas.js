function ehDataValida(dia, mes, ano) {
    // Verifica se os parâmetros são números e estão dentro de faixas plausíveis
    if (typeof dia !== 'number' || typeof mes !== 'number' || typeof ano !== 'number') return false;
    if (ano < 1 || mes < 1 || mes > 12 || dia < 1) return false;

    // Número de dias em cada mês (sem considerar bissexto ainda)
    const diasNoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Ajusta fevereiro para anos bissextos
    if (mes === 2 && ehAnoBissexto(ano)) {
        diasNoMes[1] = 29;
    }

    // Verifica se o dia está dentro do permitido para o mês
    return dia <= diasNoMes[mes - 1];
}

function ehAnoBissexto(ano) {
    // Ano bissexto: divisível por 4, exceto se for divisível por 100 e não por 400
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

// Exemplos de uso:
console.log(ehDataValida(29, 2, 2024)); // true (ano bissexto)
console.log(ehDataValida(29, 2, 2023)); // false (não bissexto)
console.log(ehDataValida(31, 4, 2023)); // false (abril tem 30 dias)
console.log(ehDataValida(31, 10, 2025)); // true

