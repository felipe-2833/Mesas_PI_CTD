let i = 1;
//while(i<=100){
    //if(i%2 != 0){
      //  console.log(i);
    //}
   // i++
//}

//while(i<=100){
   // if(i%2 == 0){
       // console.log(i);
   // }
   // i++
//}

//let int = 30;

//while(i<=int){
    //console.log(i);
    //i++
//}
let media ;
let soma = 0;
let inotas=0;
function alunos(nAlunos,notas){
    while(inotas < notas.length){
        soma += notas[inotas];
        media = soma / nAlunos;
        inotas++;
    }
    console.log('A media da sala == ' +media);
}

alunos(5,[7,6,8,10,9])