
//criar função microondas;
//criar dois parametros: comida e tempoPadão;
//estruturar em if ternario as 5 comidas, com 5 tempos padões;
//criar if's para as condições;
//colocar console.log  "Prato pronto, bom apetite!!!". no final;

function microondas (comida,tempo){

    let tempoPadrao;

    switch (comida){
        case 1:
        case 'Pipoca':
            tempoPadrao = 10;
            break;
        
        case 2:
        case 'Macarrao':
            tempoPadrao = 8;
            break;
        
        case 3:
        case 'Carne':
            tempoPadrao = 15;
            break;

        case 4:
        case 'Feijão':
             tempoPadrao = 12;
             break;

        case 5:
        case 'Brigadeiro':
            tempoPadrao = 12;
            break;

        default:
            console.log("Prato inexistente");
    }

    if (tempo >= tempoPadrao * 2 && tempo < tempoPadrao * 3){
        console.log('A comida queimou.');
    }

    else if (tempo < tempoPadrao){
        console.log("Tempo insuficiente.");
    }

    else if (tempo >= tempoPadrao * 3){
        console.log('KABOOOM!!!');
    }

    return microondas
}

microondas(1,30);
console.log( "Prato pronto, bom apetite!!!");