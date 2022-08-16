//ex1
console.log(!true);//false
console.log(!false);//true
console.log(!! false);//false true
console.log(!!true);//true
console.log(!1);//false
console.log(!!1);//true
console.log(!0);//true
console.log(!!0);//false
console.log(!!"");//false

let x = 5;
let y = 9;

//a
console.log(x < 10 && x !== 5);//false

//b
console.log(x > 9 || x === 5);//true

//c
console.log(!(x===y));//true

//ex2
//1
x=10;
y ="a";

console.log(y==="b" || x >= 10);//true

//2
x=3;
y=8;

console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y));//false

//3
let str = ""
let msg = "haha!"
let eBonito = "false"

console.log(!((str || msg) && eBonito))//false