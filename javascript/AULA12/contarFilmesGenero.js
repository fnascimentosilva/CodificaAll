//Contar a quantidade de filmes por genero

let filmes = [
    { título: "O Poderoso Chefão", genero: "Crime/Drama" },
    { título: "Um Sonho de Liberdade", genero: "Drama" },
    { título: "Pulp Fiction: Tempo de Violência", genero: "Crime/Drama" },
    { título: "A Origem", genero: "Ficção Científica/Ação" },
    { título: "Matrix", genero: "Ficção Científica/Ação" },
    { título: "Forrest Gump: O Contador de Histórias", genero: "Drama/Comédia" },
    { título: "O Senhor dos Anéis: A Sociedade do Anel", genero: "Fantasia/Aventura" },
    { título: "Cidade de Deus", genero: "Crime/Drama" },
    { título: "A Viagem de Chihiro", genero: "Animação/Fantasia" },
    { título: "O Iluminado", genero: "Terror/Drama" }
];

let contagemGenero = {}

filmes.forEach(filme => {
    if(contagemGenero[filme.genero]){
        contagemGenero[filme.genero]++
    }else(
        contagemGenero[filme.genero] = 1
    )
    
})

console.table(contagemGenero);

