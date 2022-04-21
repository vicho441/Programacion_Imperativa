const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

const menores18 = [];
const mayoresoIgules18 = []; 
const iguales18 = [];

for (let i = 0; i < edades.length; i++) {
    if (edades[i] < 18) {
        menores18.push(edades[i]);
    } else if (edades[i] >= 18) {
        mayoresoIgules18.push(edades[i]);

        if (edades[i] == 18) {
            iguales18.push(edades[i]);
        }
    } 
}

console.log(menores18);
console.log(mayoresoIgules18);
console.log(iguales18);


let elMayor = 0;
let elMenormejor = 292939723729;
for (let i = 0; i < edades.length; i++) {
    
    if (edades[i] > elMayor) {
        elMayor = edades[i]
    }
    if (edades[i] < elMenormejor) {
        elMenormejor = edades[i];
    }
}
console.log(elMayor);


//CON BUBBLE    
let nuevoArray = edades.slice(); //CLONAMOS ARRAY
for (let i = 0; i < edades.length; i++) {
    
    for (let j = 0; j < edades.length - 1; j++) {

        if (nuevoArray[j] < nuevoArray[j + 1]) {
            let temporal = nuevoArray[j + 1] 
            nuevoArray[j + 1] = nuevoArray[j]
            nuevoArray[j] = temporal
        }
    }
}
let elMenor = nuevoArray[9];
console.log(elMenormejor);


function PromedioEdades(array) {
    let Lasuma = 0;

    for (let i = 0; i < array.length; i++) {
        Lasuma = Lasuma + array[i];
    }
    return Lasuma / array.length
}

console.log(PromedioEdades(edades));

function EdadesMasUno(array) {
    let clonacion = array.slice();

    for (let i = 0; i < clonacion.length; i++) {
        clonacion[i]++
    }
    return clonacion
}
console.log(EdadesMasUno(edades));

function EdadesMasUnoOpcion2(array) {
    let momentaneo = []

    for (let i = 0; i < array.length; i++) {
        let pushease = array[i] + 1;
        momentaneo.push(pushease)
    }
    return momentaneo
}
console.log(EdadesMasUnoOpcion2(edades));