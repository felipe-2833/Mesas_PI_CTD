//Checkpoint Parte 2
// Passo 7

let listAlunos = require('./Alunos');
let Alunos = require('./funcAlunos');
let curso = require('./CheckPoint3');

let Aluno6 = new Alunos('Bruno',5,[9,8.5,7.5,9]);
let Aluno7 = new Alunos('Patricia',0,[8,8,8.4,6.5]);
let Aluno8 = new Alunos('Roberto',1,[9.2,10,10,6]);
let Aluno9 = new Alunos('Eduarda',4,[3,5,6,7.2]);
let Aluno10 = new Alunos('Daniel',7,[4,4,7,10]);

ListaAlunos2 = [Aluno6,Aluno7,Aluno8,Aluno9,Aluno10];

curso.listaEstudantes = ListaAlunos2;

let Aluno11 = new Alunos('Gabriela',11,[9,9,7,9.4]);

curso.addAlunos(Aluno11);
console.log(curso.listaEstudantes);
console.log(curso.aprovacao(curso.listaEstudantes[5]));
console.log(curso.listaAprovacao(curso.listaEstudantes));