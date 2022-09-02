let listaCompras = ['pao','macarrao','carne', 'frango'];

console.log(listaCompras)

console.log("O método Join realiza uma junçao dos elementos de um array com um espaçamento opcional: ");
console.log(listaCompras.join(" - "));

listaCompras.pop();

console.log("O método pop elimina o ultimo elemento do array: ");
console.log(listaCompras)

listaCompras.push(" feijao ");

console.log("O método push adiciona um/+ elementos ao final do array: ");
console.log(listaCompras)

listaCompras.shift();

console.log("O método shift elimina o primeiro elemento do array: ");
console.log(listaCompras)

listaCompras.unshift('refri');

console.log("O método unshift adiciona um/+ elementos no começo do array: ");
console.log(listaCompras)
