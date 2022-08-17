//calculadora 1 
function  adicionar (num1,num2){
    return num1 + num2;
}

function subtração (num1,num2){
    return num1 - num2;
}

function multiplicação (num1,num2){
    return num1 * num2;
}

function divisão (num1,num2){
    return num1/num2;
}
//calculadora 2
console.log ("Teste de Operações a baixo:");

console.log(adicionar(40,70));

console.log(subtração(70,40));

console.log(multiplicação(50,4));

console.log(divisão(100,20));

console.log(divisão(100,0));

//calculadora3

function quadradoDoNumero(num1){
    return num1 * num1;
}

console.log(quadradoDoNumero(6));

function mediaDeTresNumeros (num1,num2,num3){
    return divisão( num1 + num2 + num3 , 3);
}

console.log(mediaDeTresNumeros(3,3,3));

function calculaPorcentagem(num1,num2){
    return divisão (multiplicação(num1,num2),100);
}

console.log(calculaPorcentagem (100,40));

function  geradorDePorcentagem (num1,num2){
    return divisão(multiplicação(num1,100),num2);
}

console.log( geradorDePorcentagem (4,40));