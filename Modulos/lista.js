let Lista = {

//1)A maior e a menor altura do grupo;

    maiorMenorAltura: function(array){
    let maior = array[0].altura;
    let menor = array[0].altura;
    for(let i = 0; i < array.length; i++){
        if(array[i].altura > maior){
            maior = array[i].altura;
        }

        else if(array[i].altura < menor){
            menor = array[i].altura;
        }
    }
    return 'maior altura: ' + maior + ', Menor altura: ' + menor

},
//2)A média de altura das mulheres;

    mediaAlturaMulheres: function (array){
    let mulheres = array.filter(function(sexo){return sexo.sexo === 'F'});
    let media = 0;
    for(let i = 0; i < mulheres.length; i++){
        media += mulheres[i].altura
    }
    return media/mulheres.length

},
//3)O número de homens.

    nHomens: function(array){
    let homens = array.filter(function(sexo){return sexo.sexo === 'M'});
    return homens.length
}
};

module.exports = Lista;
