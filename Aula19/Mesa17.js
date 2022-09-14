function Pessoa(altura, sexo){

    this.altura =  altura;
    this.sexo = sexo;
   

}

let pessoa0 = new  Pessoa(1.70, 'M');
let pessoa1 = new  Pessoa(1.61, 'F');
let pessoa2 = new  Pessoa(1.71, 'M');
let pessoa3 = new  Pessoa(1.80, 'M');
let pessoa4 = new  Pessoa(1.58, 'F');
let pessoa5 = new  Pessoa(1.74, 'F');
let pessoa6 = new  Pessoa(1.85, 'M');
let pessoa7 = new  Pessoa(1.55, 'F');
let pessoa8 = new  Pessoa(1.83, 'M');
let pessoa9 = new  Pessoa(1.81, 'F');
let pessoa10 = new  Pessoa(1.77, 'M');
let pessoa11 = new  Pessoa(1.92, 'M');
let pessoa12 = new  Pessoa(1.67, 'F');
let pessoa13 = new  Pessoa(1.72, 'F');
let pessoa14 = new  Pessoa(1.66, 'F');

let listaPessoas = [pessoa0,pessoa1,pessoa2,pessoa3,pessoa4,pessoa5,pessoa6,pessoa7,pessoa8,pessoa9,pessoa10,pessoa11,pessoa12,pessoa13,pessoa14];

//1)A maior e a menor altura do grupo;

function maiorMenorAltura(array){
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

}

console.log(maiorMenorAltura(listaPessoas));

//2)A média de altura das mulheres;

function mediaAlturaMulheres(array){
    let mulheres = array.filter(function(sexo){return sexo.sexo === 'F'});
    let media = 0;
    for(let i = 0; i < mulheres.length; i++){
        media += mulheres[i].altura
    }
    return media/mulheres.length
    
}

console.log(mediaAlturaMulheres(listaPessoas));

//3)O número de homens.

function nHomens(array){
    let homens = array.filter(function(sexo){return sexo.sexo === 'M'});
    return homens.length
}

console.log(nHomens(listaPessoas));


