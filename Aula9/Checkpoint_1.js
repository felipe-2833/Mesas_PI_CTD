//criar função microondas;
//criar dois parametros: comida e tempoPadão;
//estruturar em if ternario as 5 comidas, com 5 tempos padões;
//criar if's para as condições;
//colocar console.log  "Prato pronto, bom apetite!!!". no final;

function microondas (comida,tempo){
    let tempoPadão;
    switch (comida){
        case 'Pipoca':
            tempoPadão = 10;
            break;
        
        case 'Macarrão':
            tempoPadão = 8;
            break;
        
        case 'Carne':
            tempoPadão = 15;
            break;

        case 'Feijão':
             tempoPadão = 12;
             break;

        case 'Brigadeiro':
            tempoPadão = 12;
            break;

        default:
            console.log("Prato inexistente");
    }

    if (tempo >= tempoPadão * 2 && tempo < tempoPadão * 3){
        console.log('A comida queimou.');
    }

    else if (tempo < tempoPadão){
        console.log("Tempo insuficiente.");
    }

    else if (tempo >= tempoPadão * 3){
        console.log('KABOOOM!!!');
    }

    return microondas
}

microondas('Carne',45);
console.log( "Prato pronto, bom apetite!!!");