function puedeSubir(altura, acompañado, penalizado) {
    if(altura >= 1.4 && altura < 2 && !penalizado) {
        return 'Condicion1';
    } else if(altura < 1.4 && altura >= 1.2 && acompañado && !penalizado) {
        return 'Condicion2';
    } else {
        return false;
    }
}

console.log(puedeSubir(1.6, false, true));