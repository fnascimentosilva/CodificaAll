//Verificar dentro de uma lista de livros os que foram publicados antes de 2000. utilizando for of.

const livraria = [
    { titulo: "Aventuras de Alice no País das Maravilhas", autor: "Lewis Carroll", ano: 1865 },
    { titulo: "Dom Quixote de La Mancha", autor: "Miguel de Cervantes", ano: 1605 },
    { titulo: "1984", autor: "George Orwell", ano: 1949 },
    { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", ano: 1967 },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943 },
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954 },
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen", ano: 1813 },
    { titulo: "Moby Dick", autor: "Herman Melville", ano: 1851 },
    { titulo: "Crime e Castigo", autor: "Fiódor Dostoiévski", ano: 1866 },
    { titulo: "Ulisses", autor: "James Joyce", ano: 1922 }
];

console.log('Os livros lancados antes de 1900 são: ');

for(const livro of livraria){
    if(livro.ano < 1900){
        console.log(livro);
        
    }
}