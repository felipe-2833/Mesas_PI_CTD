let criarConta = function Conta(nConta, tipoConta, saldo, titular){

    this.nConta =  nConta;
    this.tipoConta = tipoConta;
    this.saldo = saldo;
    this.titular =  titular;

}

module.exports = criarConta;