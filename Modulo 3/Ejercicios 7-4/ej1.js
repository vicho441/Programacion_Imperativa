const matriz = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 23],
    [15, 16, 17, 18, 24],
    [19, 20, 21, 22, 25]
]

let sumatoria = 0;
for (let fila = 0; fila < matriz.length; fila++) {
    
    for (let columna = 0; columna < matriz[fila].length; columna++) {
        let Numero = matriz[fila][columna];
        sumatoria = sumatoria + Numero
    }
}
console.log(sumatoria);