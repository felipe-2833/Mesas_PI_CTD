//Checkpoint Parte 1
// Passo 1
// Passo 2

const Alunos = function Aluno(nome,qtdFaltas,notas){

    function calcMedia(med){
       let soma = 0;
       let media = 0;
       for(let i = 0; i < med.length; i++){
           soma += med[i]
       }
       media = soma/med.length
       return media;
   };

   function faltas(falt){
       return falt + 1;
   };

   this.nome =  nome;
   this.qtdFaltas = qtdFaltas;
   this.notas = notas;
   this.calcMedia = calcMedia(notas);
   this.faltas = faltas(qtdFaltas)

}

module.exports = Alunos;