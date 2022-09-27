function Produto(nome,preco,qtdVendida){

   this.nome =  nome;
   this.preco = preco;
   this.qtdVendida = qtdVendida;
   this.lucro = calcLucro(this.preco,this.qtdVendida);

}

let Produto0 = new Produto('Cebola',5,15);
let Produto1 = new Produto('Tomate',10,10);
let Produto2 = new Produto('Arroz',3,30);
let Produto3 = new Produto('Alho',23,2);
let Produto4 = new Produto('Milho',8,20);

let listProdutos = [Produto0,Produto1,Produto2,Produto3,Produto4];

function calcLucro(val,qtd){
    return val * qtd
}

//1
function calcLucroTotal(array){
    let soma = 0;
    for(let i = 0; i < array.length;i++){
        soma += array[i].lucro
    }
    return soma
}

//2
function pesquisarProd(nomeProd){
    for(let i=0; i<listProdutos.length; i++){
        if(nomeProd == listProdutos[i].nome){
            return listProdutos[i]
        }
    }
}

//3
function filtrarValor(valor){
    let listVal = [];
    for(let i=0; i<listProdutos.length; i++){
        if(listProdutos[i].lucro > valor){
            listVal.push(listProdutos[i])
        }
    }
    return listVal
}

//4
function classificar(array){
    array.sort((a,b) => {b.lucro - a.lucro})
    return array
}

//5
function mudarValor(nome,valorNovo){
    let prod = pesquisarProd(nome);
    prod.preco = valorNovo
    prod.lucro = calcLucro(prod.preco,prod.qtdVendida);
    return prod
}

//6
let lucroMenImposto = calcLucroTotal(listProdutos) * 0.55

//consoles
console.log(calcLucroTotal(listProdutos));
console.log(pesquisarProd('Alho'));
console.log(filtrarValor(80));
console.log(classificar(listProdutos));
console.log(mudarValor('Alho',25));
console.log('O lucro menos impostos é de: '+lucroMenImposto + 'R$');