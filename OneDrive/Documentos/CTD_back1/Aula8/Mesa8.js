//ex1
//criar funçao
//que tenha dois parametros
// deve retornar true || false

function podeSubir(alturaPessoa,estaAcompanhado){

    if((alturaPessoa >= 1.40 && alturaPessoa <= 2) || (alturaPessoa >= 1.20 && estaAcompanhado == true)){
        podeSubir = true
    }

    else{
        podeSubir = false
    }

    return podeSubir
}

console.log(podeSubir(1.3,0))

//ex2

function podeSubir2(alturaPessoa,estaAcompanhado){

    if(alturaPessoa >= 1.40 && alturaPessoa <= 2){
        console.log('Acesso autorizado')
    }
    else if (alturaPessoa >= 1.20 && estaAcompanhado == true){
        console.log('Acesso autorizado somente com acompanhante')
    }
    else{
        console.log('Acesso negado')
    }

    return podeSubir2
}

console.log(podeSubir2(1.3,1))