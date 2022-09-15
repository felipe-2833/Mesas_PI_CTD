function Espectador(idade,opiniao){

    this.idade =  idade;
    this.opiniao = opiniao;
   

}

let espectador0 = new  Espectador(12, 1);
let espectador1 = new  Espectador(23, 2);
let espectador2 = new  Espectador(34, 3);
let espectador3 = new  Espectador(50, 2);
let espectador4 = new  Espectador(17, 3);
let espectador5 = new  Espectador(41, 3);
let espectador6 = new  Espectador(38, 1);
let espectador7 = new  Espectador(25, 2);
let espectador8 = new  Espectador(27, 1);
let espectador9 = new  Espectador(33, 2);
let espectador10 = new  Espectador(39, 2);
let espectador11 = new  Espectador(48, 3);
let espectador12 = new  Espectador(36, 1);
let espectador13 = new  Espectador(21, 1);
let espectador14 = new  Espectador(19, 3);

let listaEspectadores = [espectador0,espectador1,espectador2,espectador3,espectador4,espectador5,espectador6,espectador7,espectador8,espectador9,espectador10,espectador11,espectador12,espectador13,espectador14];

//1)A média das idades das pessoas que responderam ótimo;

function mediaIdadeOtimo(array){
    let otimo = array.filter(function(opiniao){return opiniao.opiniao === 3});
    let media = 0;
    for(let i = 0; i < otimo.length; i++){
        media += otimo[i].idade
    }
    return media/otimo.length
    
}

console.log(mediaIdadeOtimo(listaEspectadores));

//2)A quantidade de pessoas que responderam regular;

function qtdRegular(array){
    let regular = array.filter(function(opiniao){return opiniao.opiniao === 1});
    return regular.length
}

console.log(qtdRegular(listaEspectadores));

//3)A porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

function porcentagemBom(array){
    let bom = array.filter(function(opiniao){return opiniao.opiniao === 2});
    return (bom.length * 100)/array.length + '%'
    
}

console.log(porcentagemBom(listaEspectadores));


