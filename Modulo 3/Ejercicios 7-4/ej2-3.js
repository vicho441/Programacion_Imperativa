function generarMatriz10por10() {
    let Matriz = []
    let rellenoArray = 0;

    for (let fila = 0; fila < 10; fila++) {
        let LaColumna = [];

        for (let columna = 0; columna < 10; columna++) {
            rellenoArray += 1
            LaColumna.push(rellenoArray)
        }
        Matriz.push(LaColumna)

    }
    return Matriz
}

let matriz10por10 = generarMatriz10por10();
console.table(matriz10por10);


function Sumaenrojo(array) {
    let accede = -1;
    let laSuma = 0;

    for (let i = 0; i < array.length; i++) {
        accede += 1
        seSuma = array[i][accede]
        laSuma = laSuma + seSuma;
    }
    return laSuma;
}
console.log(Sumaenrojo(matriz10por10));



function Sumaenverde(array) {
    let accede = 10;
    let laSuma = 0;

    for (let i = 0; i < array.length; i++) {
        accede -= 1
        seSuma = array[i][accede]
        laSuma = laSuma + seSuma;
    }
    return laSuma;
}
console.log(Sumaenverde(matriz10por10));