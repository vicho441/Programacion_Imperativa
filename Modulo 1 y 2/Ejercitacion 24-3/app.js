//la lista de clientes.
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


let banco = {
    clientes: {
        cliente0: arrayCuentas[0],
        cliente1: arrayCuentas[1],
        cliente2: arrayCuentas[2],
        cliente3: arrayCuentas[3],
        cliente4: arrayCuentas[4],
    },
    consultarClientes: function(nombre) {
        for (let i = 0; i < arrayCuentas.length; i++) {
            if(nombre == arrayCuentas[i].titularCuenta) {
                var solucion = arrayCuentas[i]
            } 
        }
        return solucion;
    },
    depósito: function(titular, deposito) {
        let PersonaDepositado = this.consultarClientes(titular);
        PersonaDepositado.saldoEnPesos = PersonaDepositado.saldoEnPesos + deposito;
        return `Depósito realizado, su nuevo saldo es: ${PersonaDepositado.saldoEnPesos}`;
    },
    extracción: function(titular, extraccion) {
        let personaQueExtrajo = this.consultarClientes(titular);
        let cuenta = personaQueExtrajo.saldoEnPesos - extraccion;
        if(cuenta < 0) {
            var retorna = 'Fondos insuficientes'
        } else {
            personaQueExtrajo.saldoEnPesos = cuenta;
            var retorna = `Extracción realizada correctamente, su nuevo saldo es: ${personaQueExtrajo.saldoEnPesos}`
        }
        return retorna;
    }
}
console.log(banco.consultarClientes("Jarret Lafuente"));
console.log(banco.depósito("Jarret Lafuente", 20000));
console.log(banco.extracción("Ansel Ardley", 20000));
