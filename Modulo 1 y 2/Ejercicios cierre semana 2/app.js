const prompt = require("prompt-sync")({ sigint: true });

// (1)
let FraseaImprimir = prompt( "Pon una frase y se imprimirá en consola: " );
console.log(FraseaImprimir);

// (2)
let Saludo = prompt( "¿Cual es tu nombre? " );
console.log(`Hola ${Saludo}!`);

// (3)
let Numero1 = prompt( "Ingrese dos Numeros separados por una coma y se sumaran (EJ: 1, 4): " );
function Solucion3(n) {
    let paso1 = n.split(",");
    let split1 = parseInt(paso1[0]);
    let split2 = parseInt(paso1[paso1.length - 1]);
    return split1 + split2;
}
console.log(Solucion3(Numero1));

// (4)
let diaActual = prompt( "Ingrese el numero de día en el que nacio (Ej: 04) (Ej: 13): " );
let mesesActuales = prompt( "ingrese el numero de mes en el que nacio (Ej: 08) (Ej: 13): " );
let AñosActuales = prompt( " Ingrese su año de nacimiento (Ej: 2003): " );

let fechaJunta = `${mesesActuales}/${diaActual}/${AñosActuales}`
function getEdad(dateString) {
    let hoy = new Date();
    let fechaNacimiento = new Date(dateString);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
    if (
      diferenciaMeses < 0 ||
      (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
    ) {
      edad--
    }
    return edad
}
let paraVer = getEdad(fechaJunta)
console.log(`Su edad es ${paraVer} años`);

// (5)
let numeroIgualdad = prompt( "Ingrese un numero al azar para coincidir con la IA: " );

function numAleatorio() {
    let generador = Math.random()*10
    let redondeo = Math.floor(generador);
    return redondeo;
}
function igualdad() {

    let callback = numAleatorio();
    if(callback == parseInt(numeroIgualdad)) {
        console.log("Felicitaciones, ese era!");
    } else {
        console.log(`Lo siento, intenta nuevamente! el numero era ${callback}`);
    }
}
igualdad();

// (6)
let Impar = prompt( "Presione enter y se imprimiran todos los numeros pares del 1 al 100:  " );

function sumatoriaHasta100() {
    for ( let i = 1; i <= 100; i++) {    
        if(i%2 === 0) {
            console.log(i);
        }
    }
}
sumatoriaHasta100();

// (7)
let Arreglo = prompt( "Presione enter y se ejecutara la septima consigna:  " );

let arregloNombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];
function splitfuncion() {
    for ( let i = 0; i <= 4; i++) {
        let split = arregloNombres[i];
        console.log(`${split}`)
    }
}
splitfuncion();

// (8)
let Pseudocodigo = prompt( "Inserte un Numero mayor a 500 y se calculará su 18%: " );
parseInt(Pseudocodigo);

function porcentaje(n) {
    if(n > 500) {
        let solucion = n*0.18
        console.log(`El 18% de su numero es ${solucion}`)
    } else {
        console.log("El numero debe ser mayor a 500")
    }
}
porcentaje(Pseudocodigo);