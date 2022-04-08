//ESTO NO ES NECESARIO PARA LAS CONSIGNAS PERO ES UNA MANERA DE DARLE UNA VUELTA DE TUERCA AL GENERADOR DE ARRAYS
//HAGAMOS UN EJEMPLO MAS REAL, IMAGINEN QUE QUEREMOS HACER UN GENERADOR DE MATRICES QUE HAGA LA CANTIDAD DE FILAS Y COLUMNAS QUE LE PIDAMOS
//TAMBIEN IMGINEMOS QUE QUEREMOS QUE ESTA MATRIZ TENGA NUMEROS ALEATORIOS QUE TENGAN UN MAXIMO Y IN MINIMO 

function generarMatriz10por10(filas, columnas, max, min) {
    let Matriz = [];

    for (let fila = 0; fila < filas; fila++) {
        let LaColumna = [];

        for (let columna = 0; columna < columnas; columna++) {
            let paraPushear = Math.floor(Math.random() * (max - min) + min);
            LaColumna.push(paraPushear)
        }
        Matriz.push(LaColumna)

    }
    return Matriz
}

let matriz10por10 = generarMatriz10por10(4, 7, 900, 2000);
console.log(matriz10por10);