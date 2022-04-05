function cantidadDeDiasEnUnMes(n) {
    if (n == 1 || n == 3 || n == 5 || n == 7 || n == 8 || n == 10 || n == 12) {
     return 31  
    } else if( n == 4 || n == 6 || n == 9 || n == 11 ) {
        return 30
    } else if( n == 2 ) {
        return 28
    } else {
        return `No existe mes con el numero ${n}`
    }
}

console.log(cantidadDeDiasEnUnMes(13));