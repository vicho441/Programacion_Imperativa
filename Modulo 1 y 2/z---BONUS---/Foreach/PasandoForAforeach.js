//ACA PASARÉ EN MODO DE EJEMPLO UNOS CODIGOS QUE SE USAN EN FOR A FOREACH

//Nos dan un array de cuentas de Un banco

let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
];

//NOS PIDEN UNA FUNCION QUE DEVUELVA LOS NOMBRES DE LOS CLIENTES DE UN BANCO

function consultarClientes(nombre) {
    for (let i = 0; i < arrayCuentas.length; i++) {
       console.log(arrayCuentas[i].titularCuenta); 
    }
}
consultarClientes(arrayCuentas);

console.log('#####################'); //PARA SEPARAR LOS CONSOLE.LOG

arrayCuentas.forEach(nombre => {  //EL PARAMETRO NOMBRE AHORA TOMA EL VALOR DE arrayCuentas
    console.log(nombre.titularCuenta);
});

//LAS DOS HACEN LO MISMO PERO UNA ES MAS SENCILLA, Y NO HAY QUE LLAMARLA, SE EJECUTA AUTOMATICAMENTE