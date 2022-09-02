function Conta(nConta, tipoConta, saldo, titular){

    this.nConta =  nConta;
    this.tipoConta = tipoConta;
    this.saldo = saldo;
    this.titular =  titular;

}

let conta0 = new Conta(1234, 'corrente',20, 'Felipe Fidelix' );
let conta1 = new Conta(5678, 'poupanca',25, 'Bruno Fidelix' );
let conta2 = new Conta(9012, 'corrente',30, 'Raul Martinz' );
let conta3 = new Conta(3456, 'corrente',35, 'Renato da Silva' );
let conta4 = new Conta(7890, 'poupanca',40, 'Fabiane Freitas' );
let conta5 = new Conta(9987, 'poupanca',45, 'Roberta Oliveira' );
let conta6 = new Conta(6543, 'corrente',50, 'Carla Miranda' );
let conta7 = new Conta(2109, 'poupanca',55, 'Henrique de Souza' );
let conta8 = new Conta(8765, 'corrente',60, 'Igor Alencar' );
let conta9 = new Conta(4321, 'corrente',65, 'Maria Sanches' );

let listaObjetos = [conta0, conta1, conta2, conta3, conta4, conta5, conta6, conta7, conta8, conta9];

let resultado = 0;

let banco = {
    clientes: listaObjetos,
    consultarCliente: function(nome1){
        for(let i = 0; i < listaObjetos.length; i++){
            if(listaObjetos[i].titular == nome1){

            resultado = listaObjetos[i];

            return resultado

            }
            else{

             resultado = 'Este cliente não está cadastrado'

             }
        }
        return resultado
    },
    deposito: function(nome2, dinDeposito){
        for(let i = 0; i < listaObjetos.length; i++){
            if(listaObjetos[i].titular == nome2){

            resultado = listaObjetos[i].saldo + dinDeposito;
 
            return 'Deposito atualizado, seu novo saldo é de: R$' + resultado

            }
            else{

             resultado = 'Este cliente não está cadastrado'

             }
        }
        return resultado
    },
    saque: function(nome3, valExtraido){
        for(let i = 0; i < listaObjetos.length; i++){
            if(listaObjetos[i].titular == nome3 && (listaObjetos[i].saldo - valExtraido) > 0){

            resultado = listaObjetos[i].saldo - valExtraido;
 
            return 'Extração feita com sucesso, seu saldo é de: R$' + resultado

            }
            else if(listaObjetos[i].titular == nome3 && (listaObjetos[i].saldo - valExtraido) <= 0){

                return 'Fundo insuficiente'

            }
            else{

             resultado = 'Este cliente não está cadastrado'

             }
        }
        return resultado
    },
}

console.log(banco.saque('Renato da Silva', 20));


