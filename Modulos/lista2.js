let Lista2 = {

    //1)A média das idades das pessoas que responderam ótimo;

    mediaIdadeOtimo: function(array){
    let otimo = array.filter(function(opiniao){return opiniao.opiniao === 3});
    let media = 0;
    for(let i = 0; i < otimo.length; i++){
        media += otimo[i].idade
    }
    return media/otimo.length
    
},

//2)A quantidade de pessoas que responderam regular;

qtdRegular: function (array){
    let regular = array.filter(function(opiniao){return opiniao.opiniao === 1});
    return regular.length
},

//3)A porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

porcentagemBom: function(array){
    let bom = array.filter(function(opiniao){return opiniao.opiniao === 2});
    return (bom.length * 100)/array.length + '%'
    
}
};

module.exports = Lista2;