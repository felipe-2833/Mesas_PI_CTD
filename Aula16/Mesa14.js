function fizzbuzz (valor1,valor2,nome1,nome2){
    let resultado = 0;
    for(let i = 1; i <=100; i++) {

        if(((i%valor2)==0) && ((i%valor1)==0)){
            resultado += nome1+nome2+' ';
        }

        else if((i%valor1)==0){
            resultado += nome1 +' ';
        }

        else if((i%valor2)==0){
            resultado += nome2 +' ';
        }

        else{
            resultado += i+' ';
        }
    }
    return resultado
}

console.log(fizzbuzz(2,3,'Tico','Teco'));