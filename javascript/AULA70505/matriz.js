const matriz = [];

for (let i = 0; i < 10; i++) {
  matriz[i] = [];
  for (let j = 0; j < 10; j++) {
    matriz[i][j] = 0; // ou qualquer valor inicial que quiser
  }
}

console.table(matriz)