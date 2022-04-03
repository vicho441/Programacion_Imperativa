//EJERCICIO 1
const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
const edadesGrupo1 = [21, 12, 15, 18, 25];
const edadesGrupo2 = [2, 11, 54, 63, 24];

function edadMenos18(array) {  
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        
        if(array[i] < 18) {
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}

function edadMas18(array) {  
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        
        if(array[i] > 18) {
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}

function edadDe18(array) {  
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        
        if(array[i] == 18) {
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}

//Promedio de un array
function ArrayPromedio(array) {
    let suma = 0 
    let ArrayLen = array.length;
    for (let i = 0; i < ArrayLen; i++) {
        suma = suma + array[i]
    }
    return suma / ArrayLen;
}

function sumaUnoPorIteracion(array) {

    for (let i = 0; i < array.length; i++) {
        let arraymod = array[i] + 1
        console.log(arraymod);
    }
}

// console.log(edadMenos18(edades));
// console.log(edadMas18(edades));
// console.log(edadDe18(edades));
// console.log(Math.min(...edades));
// console.log(Math.max(...edades));
// console.log(ArrayPromedio(edades));
// sumaUnoPorIteracion(edades);


//Ejercicio 2
const arrayCuentas = [
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: "$3,253.40",
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: "$3,229.45",
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: "$1,360.19",
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: "$3,627.12",
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: "$1,616.52",
        edadTitular: 34,
        tipoCuenta: "sueldo"
    },
      {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: "$1,408.68",
        edadTitular: 25,
        tipoCuenta: "corriente"
    }
]

function mayoresA30(array) {
    let nuevoArray = [];

    for (let i = 0; i < array.length; i++) {
        let posicion = array[i];
        if(posicion["edadTitular"] < 30) {
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}

function menoresA30eIguales(array) {
    let nuevoArray = [];

    for (let i = 0; i < array.length; i++) {
        let posicion = array[i];
        if(posicion["edadTitular"] >= 30) {
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}

function igual(array) {
    let nuevoArray = [];

    for (let i = 0; i < array.length; i++) {
        let posicion = array[i];
        if(posicion["edadTitular"] == 30) {
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}

function masJoven(array) {
    let arrayDePrueba = [];

    for (let i = 0; i < array.length; i++) {
        let edad = array[i].edadTitular;
        arrayDePrueba.push(edad);
    }
    for (let i = 0; i < array.length; i++) {
        let edad = array[i].edadTitular;

        if(edad == Math.min(...arrayDePrueba)) {
            var edadFinal = array[i];
        }
    }
    return edadFinal;
}

function arrayPortipoDeCuenta(array, tipo) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        
        if (array[i].tipoCuenta == tipo) {
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}

function arrayPorCuentaHabilitada(array) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        
        if (array[i].estaHabilitada) {
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}

function arrayPorCuentadesHabilitada(array) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        
        if (!array[i].estaHabilitada) {
            nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
}

function menorSaldo(array) {
    let arrayDePrueba = [];
    let clonacion = array.slice();
    let retorna = {};

    for (let i = 0; i < array.length; i++) {
        let saldo1 = array[i].saldo;
        saldo1 = saldo1.replace("$", "")
        saldo1 = saldo1.replace(",", "")
        saldo1 = parseFloat(saldo1);
        arrayDePrueba.push(saldo1);
    }
    for (let i = 0; i < array.length; i++) {
        clonacion[i].saldo = clonacion[i].saldo.replace("$", "")
        clonacion[i].saldo = clonacion[i].saldo.replace(",", "")
        clonacion[i].saldo = parseFloat(clonacion[i].saldo);

        if (clonacion[i].saldo == Math.max(...arrayDePrueba)) {
            retorna = clonacion[i];
        }
    }
    return retorna;
}

function mayorSaldo(array) {
    let arrayDePrueba = [];
    let clonacion = array.slice();
    let retorna = {};

    for (let i = 0; i < array.length; i++) {
        let saldo1 = array[i].saldo;
        saldo1 = saldo1.replace("$", "")
        saldo1 = saldo1.replace(",", "")
        saldo1 = parseFloat(saldo1);
        arrayDePrueba.push(saldo1);
    }
    for (let i = 0; i < array.length; i++) {
        clonacion[i].saldo = clonacion[i].saldo.replace("$", "")
        clonacion[i].saldo = clonacion[i].saldo.replace(",", "")
        clonacion[i].saldo = parseFloat(clonacion[i].saldo);

        if (clonacion[i].saldo == Math.min(...arrayDePrueba)) {
            retorna = clonacion[i];
        }
    }
    return retorna;
}

console.log(mayoresA30(arrayCuentas));
console.log(menoresA30eIguales(arrayCuentas));
console.log(igual(arrayCuentas));
console.log(masJoven(arrayCuentas));
console.log(arrayPortipoDeCuenta(arrayCuentas,'sueldo'));
console.log(arrayPorCuentaHabilitada(arrayCuentas));
console.log(arrayPorCuentadesHabilitada(arrayCuentas));
console.log(menorSaldo(arrayCuentas));
console.log(mayorSaldo(arrayCuentas));