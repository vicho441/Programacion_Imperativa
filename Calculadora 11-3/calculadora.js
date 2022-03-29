const prompt = require("prompt-sync")({ sigint: true });

let sumar = (n1, n2) => n1 + n2; //FUNCION SUMAR
let restar = (n1, n2) => n1 - n2; //FUNCION RESTAR
let multiplicar = (n1, n2) => n1 * n2; //FUNCION MULTIPLICAR
let dividir = (n1, n2) => n1 / n2; //FUNCION DIVIDIR
let cuadradoDeUnNumero = n => n * n; //CUADRADO DE UN NUMERO
function promedioDeTresNumeros(n1, n2, n3) {
    const primerPaso = sumar(n1, n2);
    const segundoPaso = sumar(primerPaso, n3);
    return dividir(segundoPaso, 3);
}

function calcularPorcentaje(n1, n2) {
    const primerPaso = multiplicar(n1, n2);
    return dividir(primerPaso, 100);
}

console.log("-----TESTEO DE OPERACIONES / CALCULADORA-----\n\n\n");

console.log("sumar\nrestar\nmultiplicar\ndividir\nnumerocuadrado\npromediode3num\nporcentaje\n\n");

let operacionElegida = prompt("Ingrese La operacion Matematica que desee hacer / IMPORTANTE: ESCRIBA UNA DE LAS OPERACIONES QUE APARECEN ARRIBA\n SIN NINGUNA DIFERENCIA. NI UN ESPACIO DEMÁS, GRACIAS): ");
let NumerosElegidos = prompt("\n\nIngrese los o el numero de su operacion (ej: 4, 5) (EN CASO DE QUERER HACER UN CUADRADO SOLO\n PONER UN NUMERO --- EN CASO DE QUERER SACAR PORCENTAJE PONER PRIMERO EL NUMERO Y DESPUES EL PORCENTAJE QUE QUERRAMOS SACAR [EJ: 300, 15] ESO VA A DAR EL 15% DE 300\n SI QUERÉS HCAER EL PROMEDIO DE TRES NUMEROS EXPRESARLOS DE ESTA MANERA -> 30, 60, 90): ");

if(operacionElegida == "sumar") { 
    let Sumaseparada = NumerosElegidos.split(","); // "5" "4"
    let primerNumero = Sumaseparada[0]; // 5
    let NumeroUltimo = Sumaseparada[Sumaseparada.length - 1]; //4
    let Solucion = sumar(parseInt(primerNumero), parseInt(NumeroUltimo)); 
    console.log("Su solución es: " + Solucion);
} else if (operacionElegida == "restar") {
    let operacionseparada = NumerosElegidos.split(",");
    let primerNumero = operacionseparada[0];
    let NumeroUltimo = operacionseparada[operacionseparada.length - 1]
    let Solucion = restar(parseInt(primerNumero), parseInt(NumeroUltimo));
    console.log("Su solución es: " +  Solucion);
} else if (operacionElegida == "multiplicar") {
    let operacionseparada = NumerosElegidos.split(",");
    let primerNumero = operacionseparada[0];
    let NumeroUltimo = operacionseparada[operacionseparada.length - 1]
    let Solucion = multiplicar(parseInt(primerNumero), parseInt(NumeroUltimo));
    console.log("Su solución es: " +  Solucion);
} else if (operacionElegida == "dividir") {
    let operacionseparada = NumerosElegidos.split(",");
    let primerNumero = operacionseparada[0];
    let NumeroUltimo = operacionseparada[operacionseparada.length - 1]
    let Solucion = dividir(parseInt(primerNumero), parseInt(NumeroUltimo));
    console.log("Su solución es: " +  Solucion);
} else if (operacionElegida == "numerocuadrado") {
    let solucion = cuadradoDeUnNumero(NumerosElegidos);
    console.log("Su solución es: " +  solucion);
} else if (operacionElegida == "promediode3num") {
    let operacionseparada = NumerosElegidos.split(",");
    let primerNumero = operacionseparada[0];
    let NumeroDelMedio = operacionseparada[operacionseparada.length - 1]
    let NumeroUltimo = operacionseparada[operacionseparada.length - 2]
    let Solucion = promedioDeTresNumeros(parseInt(primerNumero), parseInt(NumeroDelMedio) , parseInt(NumeroUltimo));
    console.log("Su solución es: " +  Solucion);
} else if (operacionElegida == "porcentaje") {
    let operacionseparada = NumerosElegidos.split(",");
    let primerNumero = operacionseparada[0];
    let NumeroDelMedio = operacionseparada[operacionseparada.length - 1];
    let Solucion = calcularPorcentaje(parseInt(primerNumero), parseInt(NumeroDelMedio));
    console.log("Su solución es: " +  Solucion + "%");
} else if (operacionElegida !== ("sumar", "restar", "multiplicar", "dividir", "numerocuadrado", "promediode3num", "porcentaje") ) {
    console.log("La operacion elegida no existe o está mal escrita");
}