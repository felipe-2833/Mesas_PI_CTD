//Checkpoint Parte 1
// Passo 1
// Passo 2

let Alunos = require('../Aula23/funcAlunos');

let Aluno0 = new Alunos('Felipe',3,[9,8,7.5,4]);
let Aluno1 = new Alunos('Giovana',0,[7,8,9.5,6]);
let Aluno2 = new Alunos('Carol',1,[9,10,7.5,9.2]);
let Aluno3 = new Alunos('João',4,[3,5,7.8,6.2]);
let Aluno4 = new Alunos('Tiago',8,[2,4,7,10]);

let listAlunos = [Aluno0,Aluno1,Aluno2,Aluno3,Aluno4];

module.exports = listAlunos;