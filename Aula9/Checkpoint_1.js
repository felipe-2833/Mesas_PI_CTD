
//criar função microondas;
//criar dois parametros: comida e tempoPadão;
//estruturar em if ternario as 5 comidas, com 5 tempos padões;
//criar if's para as condições;
//colocar console.log  "Prato pronto, bom apetite!!!". no final;

function microondas (comida,tempo){
    let tempoPadão;
    switch (comida){
        case 1:
        case 'Pipoca':
            tempoPadão = 10;
            break;
        
        case 2:
        case 'Macarrão':
            tempoPadão = 8;
            break;
        
        case 3:
        case 'Carne':
            tempoPadão = 15;
            break;

        case 4:
        case 'Feijão':
             tempoPadão = 12;
             break;

        case 5:
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

microondas('pipoca',9);
console.log( "Prato pronto, bom apetite!!!");