//1
let filmes_E_Séries = ["star_wars", "matrix",  "mr._robot", "o_preco_do_amanhã",  "avida_e_bela"];

function maiuscula (array1){
    for(let i = 0;i<array1.length;i++){
        array1[i] = array1[i].toUpperCase()
    }
    
    return array1
}

console.log(maiuscula(filmes_E_Séries));

//2
let filmesAnimacao = ["Toy_Story", "Procurando_Nemo", "Kung-fu_Panda", "Wally", "Fortnite"];
let soma1 = ' ';
let soma2 = ' ';
let somaTotal = '';
function todosOsFilmes (array2,array3){

    array2 = maiuscula(array2)
    array3 = maiuscula(array3)

    if(array2.length == array3.length){

        for(let i = 0; i< array2.length;i++ ){
        somaTotal += (array2[i] + ', ' + array3[i] + ', ');
        }
    }

    else{

        for(let i = 0; i< array2.length;i++ ){
            soma1 += (array2[i] + ', ');
        }
        for(let i = 0; i< array3.length;i++ ){
            soma2 += (array3[i] + ', ');
        }
        somaTotal = soma1 + soma2
    }

    return somaTotal.split()
    
}

console.log(todosOsFilmes(filmes_E_Séries,filmesAnimacao));

//3
let filmesAnimacao2 = filmesAnimacao.pop()
console.log(todosOsFilmes(filmes_E_Séries,filmesAnimacao));

//4

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 9, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparacao(array1,array2){
    if(array1.length!=array2.length)
   return "False";
  else
  {

   for(var i=0;i<array1.length;i++)
   if(array1[i]!=array2[i])
    return "False";
    return "True";
  }
}

console.log(comparacao(asiaScores,euroScores))



