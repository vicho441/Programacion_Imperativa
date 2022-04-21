

function generadoMatriz10Por10() {
    let miMatriz = [];
    let valoralm = 0;

    for (let fila = 0; fila < 10; fila++) {
        let paraPush = [];

        for (let columna = 0; columna < 10; columna++) {
            valoralm++
            paraPush.push(valoralm);
        }
        miMatriz.push(paraPush);
    }
    return miMatriz;
}

console.log(generadoMatriz10Por10());

function Sumaenrojo(matriz) {
    let accede = -1; 
    let laSuma = 0; 

    for (let i = 0; i < matriz.length; i++) {
        accede ++
        seSuma = matriz[i][accede]
        laSuma = laSuma + seSuma;
    }
    return laSuma;
}
console.log(Sumaenrojo(generadoMatriz10Por10()));

function SumaenVerde(matriz) {
    let accede = 10; 
    let laSuma = 0; 

    for (let i = 0; i < matriz.length; i++) {
        accede --
        seSuma = matriz[i][accede]
        laSuma = laSuma + seSuma;
    }
    return laSuma;
}

console.log(SumaenVerde(generadoMatriz10Por10()));