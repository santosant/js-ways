var doh = "Doh";

console.log(typeof doh.toUpperCase);
// -> Function

console.log(doh.toUpperCase());
// -> DOH

//As propriedades que contêm funções são geralmente chamadas de métodos do valor a que pertencem. Como
//por exemplo, " toUpperCase é um método de uma string".

var mack = [];

console.log(typeof mack);
mack.push("Mack");
mack.push("the", "Knife");
console.log(mack);

console.log(mack.join(" "));
console.log(mack.pop());
console.log(mack);
