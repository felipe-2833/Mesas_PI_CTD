let soma = (a,b) => a + b;

console.log(soma(4,10));

function resultado(msg, valor1,valor2,callback){

    console.log(msg + ' ' + callback(valor1,valor2))

}


resultado('o resultado é:', 5, 9,soma);