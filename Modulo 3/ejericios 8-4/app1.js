let gastos = [
    [
        1170, 1789,  940,
        1979, 1811, 1884,
        1065
    ],
    [
        1585, 1554,
        1355, 1956,
        1885, 1927,
        1349
    ],
    [
        1675, 1310, 1962,
        1015,  941, 1658,
        1416
    ],
    [
        1535, 1024,
        1616, 1732,
        1347, 1862,
        1191
    ]
]

let semanaElegida = 0;
function GastosEnUnaSemana(matriz, semana) {
    let sumatoria = 0;
    semanaElegida = semana;
    semana = matriz[semana - 1];

    for (let i = 0; i < semana.length; i++) {
        sumatoria = sumatoria + semana[i];
    }
    return sumatoria;
}
let GastoPorSemana = GastosEnUnaSemana(gastos, 3);
console.log(`En la semana ${semanaElegida} Gasto $${GastoPorSemana}`);

function TotalDeUnDía(matriz, dia) {
    dia = dia - 1;
    let sumatoria = 0;
    for (let i = 0; i < matriz.length; i++) {
        sumatoria = sumatoria + matriz[i][dia]
    }
    return `Los dias ${dia + 1} del mes, en total suman, $${sumatoria}`
}

console.log(TotalDeUnDía(gastos, 2));

function GastosTotalesDeUnMes(matriz) {
    let sumatoria = 0;

    for (let i = 0; i < matriz.length; i++) {
        
        for (let j = 0; j < matriz[i].length; j++) {
            sumatoria = sumatoria + matriz[i][j]
        }
    }
    return `En un mes gastaste $${sumatoria}`;
}

console.log(GastosTotalesDeUnMes(gastos));


//EJERCICIO OPCIONAL
function SemanaConMasGastos(matriz) {
    let Elmayor = 0;
    let enSemana = 0;
    for (let i = 1; i <= matriz.length; i++) {
        let gasto = GastosEnUnaSemana(matriz, i);

        if (gasto > Elmayor) {
            Elmayor = gasto;
            enSemana = i;
        }
    }
    return `La semana en donde gastaste mas fue la semana numero ${enSemana}, y gastaste $${Elmayor}`
}
console.log(SemanaConMasGastos(gastos));