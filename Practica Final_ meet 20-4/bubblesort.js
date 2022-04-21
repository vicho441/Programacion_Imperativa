let ArrayConcursantes = [
    2108,  689,  937, 1147,
    969, 2292, 1974, 1167,
    2890, 1914, 2569, 2688,
    1462, 2804, 1790       
]

function ordenarLikes(array) {
    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[j + 1]) {
                let temporal = array[j + 1] 
                array[j + 1] = array[j]
                array[j] = temporal
            }
        }
    }
    return array;
}

console.log(ordenarLikes(ArrayConcursantes));

let ArrayMeteorologico = [
    {
        día: 17,
        mes: 04,
        maxTemp: 20,
        mintemp: 15
    },
    {
        día: 18,
        mes: 04,
        maxTemp: 23,
        mintemp: 10
    },
    {
        día: 19,
        mes: 04,
        maxTemp: 20,
        mintemp: 8
    }
]

function OrdenarTempMinima() {
    for (let i = 0; i < ArrayMeteorologico.length; i++) {
        
        for (let j = 0; j < ArrayMeteorologico.length - 1; j++) {

            if (ArrayMeteorologico[j].mintemp > ArrayMeteorologico[j + 1].mintemp) {
                let temporal = ArrayMeteorologico[j + 1]
                ArrayMeteorologico[j + 1] = ArrayMeteorologico[j]
                ArrayMeteorologico[j] = temporal
            }
            
        }
    }
    return ArrayMeteorologico;
}

console.log(OrdenarTempMinima());

function OrdenarTempMaxima() {
    for (let i = 0; i < ArrayMeteorologico.length; i++) {
        
        for (let j = 0; j < ArrayMeteorologico.length - 1; j++) {

            if (ArrayMeteorologico[j].maxTemp > ArrayMeteorologico[j + 1].maxTemp) {
                let temporal = ArrayMeteorologico[j + 1]
                ArrayMeteorologico[j + 1] = ArrayMeteorologico[j]
                ArrayMeteorologico[j] = temporal
            }
            
        }
    }
    return ArrayMeteorologico;
}
console.log(OrdenarTempMaxima());