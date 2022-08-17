function podeSubir (alturaPessoa,estaAcompanhado){
    if(alturaPessoa >= 1.40 && alturaPessoa <= 2 && (estaAcompanhado == "sim" || estaAcompanhado == "não")){
        console.log("Acesso autorizado");
    }
    else if (alturaPessoa < 1.40 && estaAcompanhado == "sim" && alturaPessoa >= 1.20){
        console.log("Acesso somente com acompanhante");
    }
    else if (alturaPessoa < 1.20  && (estaAcompanhado == "sim" || estaAcompanhado == "não" )){
        console.log("Acesso negado");
    }

    else{
        console.log("Acesso negado");
    }
}

console.log(podeSubir(1.70,"não"));

//parametro estaAcompanhado, funciona apenas com as strings "sim" ou "não".