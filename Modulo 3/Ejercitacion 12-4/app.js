const edades = [33, 27, 34, 30, 34, 25];
const letras = ["C", "A", "D", "E", "H", "Z", "J", "L" ]
const arrayCuentas = [
    {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
    },
    {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
    },
    {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
    },
    {
            titular: "Daniel Malone",
            estaHabilitada: false,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
    },
    {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
    },
    {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
    }
]

function BublleAscendente(array) { //EJ1
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

function BublleDescendente(array) { //EJ2
    
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

function ordenarSaldo(array){
  for(let i =0; i < array.length; i++){
      for(let j =0; j < array.length -1; j ++){
          if(array[j].saldo > array[j+1].saldo){
              let temp = array[j];
              array[j] = array[j+1];
          array[j+1]= temp;
          }
      }
  }
return array
}

function ordenarEDAD(array){
  for(let i =0; i < array.length; i++){
      for(let j =0; j < array.length -1; j ++){
          if(array[j].edadTitular > array[j+1].edadTitular){
              let temp = array[j];
              array[j] = array[j+1];
          array[j+1]= temp;
          }
      }
  }
return array
}

console.log(BublleAscendente(edades));
console.log(BublleDescendente(edades));
console.log(ordenAlf(letras));
console.log(ordenarSaldo(arrayCuentas));
console.log(ordenarEDAD(arrayCuentas));
