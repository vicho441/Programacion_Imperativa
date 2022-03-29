const prompt = require("prompt-sync")({ sigint: true });

let Calc = prompt("Ingrese la Cantidad de pulgadas que desea convertir: ");
let PulgadasACentimetros = pulgada => { 
    let convertido = pulgada * 2.54; 
    const mensaje = pulgada + ' pulgadas, son ' + convertido + 'cm';
    console.log(mensaje);
}
PulgadasACentimetros(Calc);

let PreguntaNombre = prompt("Ingrese Su nombre y sera convertido a URL: ");
let stringUrl = nombre => {
    let solucion = 'http://www.' + nombre + '.com'
    console.log(solucion);
}
stringUrl(PreguntaNombre);

let fraseEscrita = prompt("Ingrese una frase y sera convertida en admiracion: ");
let fraseAdmiracion = Frase => {
    let solucion = '¡¡¡' + Frase + '!!!'
    console.log(solucion);
}
fraseAdmiracion(fraseEscrita);

let preguntaEdad = prompt("Ingrese La edad en años comunes y te dire la Edad de tu perro: ");
let edadPerros = Edad => { 
    let convertido = Edad * 7; 
    const mensaje = 'Tu perro tiene ' + convertido + ' Años';
    console.log(mensaje);
}
edadPerros(preguntaEdad);

let preguntasueldo = prompt("Ingrese sus ganancias mensuales y le dire cuanto cobra por hora: ");
let SueldoMensual = mes => { 
    let convertido = mes / 40; 
    const mensaje = 'Estas cobrando ' + convertido + '$ por hora';
    console.log(mensaje);
}
SueldoMensual(preguntasueldo);

let kilogramosIMC = prompt("Ingrese su Peso en kg Para calcular su IMC (ingrese solo el numero): ");
let AlturaIMC = prompt("Ingrese su altura en metros Para calcular su IMC (ingrese solo el numero): ");
let calculadorIMC = (kilogramos, altura) => {
    let convertido = kilogramos / (altura * 2);
    const mensaje = 'Tu IMC es: ' + convertido;
    console.log(mensaje);
}
calculadorIMC(kilogramosIMC, AlturaIMC);

let TextoUpercase = prompt("Ingrese su texto en minusculas y será convertido a mayusculas: ");
function convertidorMayusculas(texto) {
    var cadena = new String(texto);
    cadena = cadena.toUpperCase();
    console.log(cadena);
}
convertidorMayusculas(TextoUpercase);

let CalculandoCirc = prompt("Ingrese el radio de un circulo y le devolvere su circunferencia: ");
let calculaCircunferencia = radio => {
    let circunferencia2 = 2* Math.PI * parseInt(radio);
    console.log(circunferencia2);
}
calculaCircunferencia(CalculandoCirc);

// function TipoDeDato(dato) {
//     console.log(typeof dato);
// }
// TipoDeDato(23);