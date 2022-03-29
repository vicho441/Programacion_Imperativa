const prompt = require("prompt-sync")({ sigint: true });


let edadElegida = prompt("Ingrese su Edad: ");
let edad = parseInt(edadElegida);

if(edad < 18) {
    console.log("No puede pasar al bar.")
    } else if (edad < 21){
        console.log("Puede pasar al bar, pero no puede tomar alcohol.")
    } else if(edad < 0) {
        console.log("Error, edad inválida. Por favor ingrese un número válido.");
    } else {
        console.log("Puede pasar al bar y tomar alcohol.")
        if(edad === 21) {
            console.log("Felicidades, sos mayor de Edad!")
        } 
    }

if (edad%2==1) {
    console.log("¿Sabías que tu edad es impar?");
} 

let LitrosElegidos = prompt("¿Cuantos litros desea cargar?: ");
let litros = parseInt(LitrosElegidos); 

function totalAPagar(vehiculo, litrosConsumidos) {
    if (vehiculo === 'coche') {
        let Precio = 86;
        
        if(litrosConsumidos >=0 && litrosConsumidos <= 25) {
            return (litros * Precio) + 50;
        } else {
            return (litros * Precio) + 25;
        }
    } else if (vehiculo === 'moto') {
        let Precio = 70;
        
        if(litrosConsumidos >=0 && litrosConsumidos <= 25) {
            return (litros * Precio) + 50;
        } else {
            return (litros * Precio) + 25;
        }
    } else if (vehiculo === 'autobus') {
        let Precio = 55;
        
        if(litrosConsumidos >=0 && litrosConsumidos <= 25) {
            return (litros * Precio) + 50;
        } else {
            return (litros * Precio) + 25;
        }
    }
}
let respuesta = "Usted debe pagar " + totalAPagar('coche', 40) + "$ en Total \n\n";
console.log(respuesta);

console.log("Elegir una de las siguientes opciones");
console.log("Ecriba tal cual el texto, Sin mayuscula demás ni espacio extra");
console.log("pollo");
console.log("carne");
console.log("veggie");
let Base = prompt("¿Vea arriba, que base desea elegir?: ");

console.log("\n\nElegir una de las siguientes opciones");
console.log("Ecriba tal cual el texto, Sin mayuscula demás ni espacio extra");
console.log("blanco");
console.log("negro");
console.log("s/gluten");
let pan = prompt("¿Vea arriba, que Pan desea elegir?: ");

console.log('\n\n A las siguientes afirmaciones responda con un si o con un no');
let Pregunta1 = prompt("(VEA ARRIBA) Desea ponerle extra Queso: ");
let Pregunta2 = prompt("Desea ponerle extra Tomate: ");
let Pregunta3 = prompt("Desea ponerle extra Lechuga: ");
let Pregunta4 = prompt("Desea ponerle extra Cebolla: ");
let Pregunta5 = prompt("Desea ponerle extra Mayonesa: ");
let Pregunta6 = prompt("Desea ponerle extra Mostaza: ");

function baseElegida() {
    if(Base == 'pollo') {
        return 150;
    } else if(Base == 'carne') {
        return 200;
    } else if(Base == 'veggie') {
        return 100;
    } else {
        return 'No tenemos esa base para hacer un sandwich';
    }
}

function panElegido() {
    if(pan == 'blanco') {
        return 50;
    } else if(pan == 'negro') {
        return 60;
    } else if(pan == 's/gluten') {
        return 75;
    } else {
        return 'No tenemos ese pan para hacer un sandwich';
    }
}

function Extras() {
    let retorna = Pregunta1 == 'si' ? 20 : 0;
    let retorna2 = Pregunta2 == 'si' ? 15 : 0;
    let retorna3 = Pregunta3 == 'si' ? 10 : 0;
    let retorna4 = Pregunta4 == 'si' ? 15 : 0;
    let retorna5 = Pregunta5 == 'si' ? 15 : 0;
    let retorna6 = Pregunta6 == 'si' ? 5 : 0;

    return retorna + retorna2 + retorna3 + retorna4 + retorna5 + retorna6;
}

let Total = baseElegida() + panElegido() + Extras();
console.log(`Su total es de $${Total}`);