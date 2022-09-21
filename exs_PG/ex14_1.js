function Conta(nConta, tipoConta, saldo, titular){

    this.nConta =  nConta;
    this.tipoConta = tipoConta;
    this.saldo = saldo;
    this.titular =  titular;

}

console.log(Conta(4870,'corrente', 100, 'Jadson Andrade'));

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

module.exports = conta0;