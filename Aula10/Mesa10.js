//Arrays e Coleções
//A

let nomes = ['Felipe', 'Bruno', 'Patricia', 'Maria'];

console.log(nomes[2]);

//B

nomes[3] = 'Willian';

console.log(nomes);

//C

nomes.push('Maria');

console.log(nomes);

//D

nomes.pop();

console.log(nomes);

//E

let nomes2 = ['Felipe', 'Marcio', 'Beatiz', 'Roberta'];

console.log(nomes[0] == nomes2[0]);

//O que esses códigos retornam?
//1

let numbers = [22, 33, 54, 66, 72]
console.log(numbers[numbers.length]) //retorna undefined

//2

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0]) //retorna spiderman

//3

let str = 'uma string qualquer'
let grupoDeAmigos2 = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos2[2][grupoDeAmigos2[2].length - 1]) //retorna str

//Array Invertido
//1
let urso = ['Pardo', 'Polar', 'Panda'];
function imprimirInverso(array1){
    console.log(array1[2]);
    console.log(array1[1]);
    console.log(array1[0]);

    return imprimirInverso
}

imprimirInverso(urso);

//2
function inverter (array1){
    let Invertido = array1[2] + ' ' +array1[1] + ' ' + array1[0];
    console.log(Invertido.split(' '));

    return inverter
}
inverter(urso);

//somarArray()

function somarArray(array1){

    return array1[0] + array1[1] + array1[2] + array1[3]
}

console.log(somarArray([1,2,3,0]));
console.log(somarArray([10,3,10,4]));
console.log(somarArray([-5,100,0,0]));

//Simulação Array.join()

function join ([a,b,c]){
    let juntos = a + b + c
    console.log(juntos);

    return join
}

join(['O','L','A']);

//Coleções de Filmes (e mais…)
//1
let filmes_E_Séries = ["star_wars", "matrix",  "mr._robot", "o_preco_do_amanhã",  "avida_e_bela"];
console.log(filmes_E_Séries[2])

//2

function maiuscula (array1){
    let crescer = array1.join(" ");
    let crescer2 = crescer.toUpperCase();
    console.log(crescer2.split(" "))

    return maiuscula
}

console.log(maiuscula(filmes_E_Séries));

//3

let filmesAnimacao = ["Toy_Story", "Procurando_Nemo", "Kung-fu_Panda", "Wally", "Fortnite"
];

function todosOsFilmes (array1,array2){
    let crescer = array1.join(" ") + array2.join(" ");
    let crescer2 = crescer.toUpperCase();
    console.log(crescer2.split(" "));
    

    return todosOsFilmes
}

todosOsFilmes(filmesAnimacao,filmes_E_Séries)

//4

let filmesAnimacao2 = filmesAnimacao.pop();
console.log(filmesAnimacao)

//5
//nao consegui fazer este, tirei de https://acervolima.com/como-comparar-dois-arrays-em-javascript/#:~:text=Em%20Javascript%2C%20para%20comparar%20dois,matrizes%20s%C3%A3o%20iguais%20ou%20n%C3%A3o.
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