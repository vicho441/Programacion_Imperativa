function invierteNumeros(numero) {
    let arraynum = [];
    numero = String(numero)
    for (let i = 0; i < numero.length; i++) {
        arraynum.push(numero[i])
    }
    arraynum.reverse();
    arraynum = arraynum.join('')
    arraynum = parseInt(arraynum);
    return arraynum;
}
console.log(invierteNumeros(12365));