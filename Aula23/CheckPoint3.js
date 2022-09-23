//Checkpoint Parte 1 e 2
// Passo 3

let listAlunos = require('./Alunos');
let Alunos = require('./funcAlunos');

const curso = {

    nome: 'Fisica',
    notaAprovacao: 6,
    faltasMax: 5,
    listaEstudantes: listAlunos,

    // Passo 4
    addAlunos: function(novoAluno){
        this.listaEstudantes.push(novoAluno)
    },

    // Passo 5
    aprovacao: function(Aluno){
        let aprov = 0;
        if(Aluno.calcMedia >= this.notaAprovacao && Aluno.qtdFaltas < this.faltasMax){
            aprov = true
        }
        else if(Aluno.qtdFaltas === this.faltasMax && Aluno.calcMedia >= (this.notaAprovacao * 1.1)){
            aprov = true;
        }
        else{
            aprov = false;
        }
        return aprov
    },

    //Passo 6
    listaAprovacao: function(listaEstudante){
        let lista = [];
        for(let i = 0;i<this.listaEstudantes.length;i++){
            lista.push(this.aprovacao(listaEstudante[i]))
        }
        return lista
    }

};

let Aluno5 = new Alunos('Gustavo',5,[6,6,7,8]);

//curso.addAlunos(Aluno5);
//console.log(curso.listaEstudantes);
//console.log(curso.aprovacao(curso.listaEstudantes[5]));
//console.log(curso.listaAprovacao(curso.listaEstudantes));

module.exports = curso;

