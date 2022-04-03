let alicia = [10, 80, 75];
let bob = [90, 20, 25];

let concurso = {
    etapas: [
        '',
        '',
        '',
    ],
    ganador: '',
    encontrarGanador: function(a, b) {
        let puntosA = 0;
        let puntosB = 0;
        for (let i = 0; i < a.length; i++) {
            if(a[i] > b[i]) {
                puntosA++;
                this.etapas[i] = 'Etapa ganada por El primer corcunsante'
            } else if(a[i] < b[i]) {
                puntosB++;
                this.etapas[i] = 'Etapa ganada por El segundo corcunsante'
            } 
        }
        if (puntosA > puntosB) {
            this.ganador = 'El primer concursante Ganó!'
        } else if(puntosA < puntosB) {
            this.ganador = 'El segundo concursante Ganó!'
        } 
    }
}

concurso.encontrarGanador(alicia, bob);
console.log(concurso);