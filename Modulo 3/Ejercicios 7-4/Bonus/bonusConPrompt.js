//PRIMERO MIRAR EL OTRO ARCHIVO. 
//IMAGINEMOS QUE QUEREMOS DEFINIR TODO LO DEL OTRO EJERCICIO CON PROMPT

const prompt = require("prompt-sync")({ sigint: true });

let cantidadFilas = prompt( "¿Cual es la cantidad de Filas que querés en tu Matriz?: " );
cantidadFilas = parseInt(cantidadFilas);
let cantidadColumnas = prompt( "¿Cual es la cantidad de Columnas que querés en tu Matriz?: " );
cantidadColumnas = parseInt(cantidadColumnas);
let Minimo = prompt( "¿Cual quieres que sea el numero minimo posible genere la Matriz?: " );
Minimo = parseInt(Minimo);
let Maximo = prompt( "¿Cual quieres que sea el numero máximo posible genere la Matriz?: " );
Maximo = parseInt(Maximo);

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

let matriz10por10 = generarMatriz10por10(cantidadFilas, cantidadColumnas, Maximo, Minimo);
console.table(matriz10por10);