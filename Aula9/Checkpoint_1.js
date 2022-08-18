
//criar função microondas;
//criar dois parametros: comida e tempoPadão;
//estruturar em if ternario as 5 comidas, com 5 tempos padões;
//criar if's para as condições;
//colocar console.log  "Prato pronto, bom apetite!!!". no final;

function microondas (comida,tempo){

    let tempoPadao;

    switch (comida){
        case 1:
        case 'Pipoca':
            tempoPadao = 10;
            break;
        
        case 2:
        case 'Macarrao':
            tempoPadao = 8;
            break;
        
        case 3:
        case 'Carne':
            tempoPadao = 15;
            break;

        case 4:
        case 'Feijão':
             tempoPadao = 12;
             break;

        case 5:
        case 'Brigadeiro':
            tempoPadao = 12;
            break;

        default:
            console.log("Prato inexistente");
    }

    if (tempo >= tempoPadao * 2 && tempo < tempoPadao * 3){
        console.log('A comida queimou.');
    }

    else if (tempo < tempoPadao){
        console.log("Tempo insuficiente.");
    }

    else if (tempo >= tempoPadao * 3){
        console.log('KABOOOM!!!');
    }

    return microondas
}

microondas('Pipoca',9);
console.log( "Prato pronto, bom apetite!!!");