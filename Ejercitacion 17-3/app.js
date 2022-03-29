const prompt = require("prompt-sync")({ sigint: true });

//PRIMER EJERCICIO
let Ej1 = prompt( "Pon un numero y Te dire cuales son los 10 Numeros que le siguen: " );
let Evento1 = parseInt(Ej1);

function diezNumerosSiguientes(n) {
    let Numero = n;
    for (let i = 1; i <= 10; i++) {
        Numero++;
        console.log(Numero);
    }
}
diezNumerosSiguientes(Evento1);

//SEGUNDO EJERCICIO 
let Ej2 = prompt("Presione Enter y mostrará todos los numeros entre 5 y 20: ");

function deTresEnTres() {
    let Numero = 2;
    for ( let i = 1; i <= 6; i++) {      
        Numero++;
        Numero++;
        Numero++;
        console.log(Numero);
    }
}
deTresEnTres();

//TERCER EJERCICIO
let Ej3 = prompt("Presione Enter y mostrará la suma de todos los numeros del 1 al 100: ");

function sumatoriaHasta100() {
    let suma = 0;
    for ( let i = 1; i <= 100; i++) {    
        suma = suma + i;
        console.log(suma);
    }
}
sumatoriaHasta100();

//CUARTO EJERCICIO
let Ej4 = prompt("Diga un numero y te retornará su factorial: ");
let Evento4 = parseInt(Ej4);

function factorial (n) {
	let total = 1; 
	for (let i = 1; i <= n; i++) {
		total = total * i; 
	}
    return total;
}
console.log(factorial(Ej4));

//ULTIMO EJERCICIO
let Ej5 = prompt("Diga un numero y mostrare fibonacci gasta ese numero: ");
let Evento5 = parseInt(Ej5);

function fibonacci(numero) {
    let numeros=[0,1];
    for (let i = 2; i < numero; i++) {
        numeros[i] = numeros[i - 2] + numeros[i - 1];
    }
    return numeros;
}
console.log(fibonacci(Evento5));