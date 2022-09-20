function Pessoa(altura, sexo){

    this.altura =  altura;
    this.sexo = sexo;


}

let pessoa0 = new  Pessoa(1.70, 'M');
let pessoa1 = new  Pessoa(1.61, 'F');
let pessoa2 = new  Pessoa(1.71, 'M');
let pessoa3 = new  Pessoa(1.80, 'M');
let pessoa4 = new  Pessoa(1.58, 'F');
let pessoa5 = new  Pessoa(1.74, 'F');
let pessoa6 = new  Pessoa(1.85, 'M');
let pessoa7 = new  Pessoa(1.55, 'F');
let pessoa8 = new  Pessoa(1.83, 'M');
let pessoa9 = new  Pessoa(1.81, 'F');
let pessoa10 = new  Pessoa(1.77, 'M');
let pessoa11 = new  Pessoa(1.92, 'M');
let pessoa12 = new  Pessoa(1.67, 'F');
let pessoa13 = new  Pessoa(1.72, 'F');
let pessoa14 = new  Pessoa(1.66, 'F');

let listaPessoas = [pessoa0,pessoa1,pessoa2,pessoa3,pessoa4,pessoa5,pessoa6,pessoa7,pessoa8,pessoa9,pessoa10,pessoa11,pessoa12,pessoa13,pessoa14];

module.exports = listaPessoas;