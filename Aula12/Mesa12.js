const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador (a, b) {
    let pontosPrimeiroParticipante = 0;
    let pontosSegundoParticipante = 0;

    for(let i = 0; i<a.length;i++){
        if(a[i] > b[i]){
            pontosPrimeiroParticipante = pontosPrimeiroParticipante + 1;
        }
        else if(a[i] < b[i]){
            pontosSegundoParticipante = pontosSegundoParticipante + 1;
        }
        else{
            pontosPrimeiroParticipante = pontosPrimeiroParticipante + 0;
            pontosSegundoParticipante = pontosSegundoParticipante + 0;
        }

    }
    let resultado
    if(pontosPrimeiroParticipante > pontosSegundoParticipante){
         resultado = 'alicia'
    }
    else if(pontosPrimeiroParticipante < pontosSegundoParticipante){
        resultado = 'bob'
    }
    else{
        resultado = 'nenhum dos dois, deu empate'
    }

    return resultado

}
console.log('O ganhador é: ' + encontrarGanhador (alicia, bob));