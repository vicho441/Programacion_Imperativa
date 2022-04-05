let arrayNum = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

function buscaDatosRepetidos(array) {
    let unicos = [];
    let repetidos = [];

    for (let i = 0; i < array.length; i++) {
        
        if (!unicos.includes(array[i])) {
            unicos.push(array[i])
        } else {
            repetidos.push(array[i]);
        }
    }
    return repetidos;
}

console.log(buscaDatosRepetidos(arrayNum));