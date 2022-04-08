let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];

let sumados = 0;

for (let i = 0; i < numeros.length; i++) {

    for (let j = 0; j < numeros[i].length; j++) {
        let Posicion = numeros[i][j];
        if (Posicion >= 10 && Posicion < 1000) {
            sumados = sumados + Posicion;
        }
    }    
}
console.log(sumados);