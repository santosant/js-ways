let pi2 = 3.141592;
console.log(pi2);

// retribuição ok
pi2 = 3;

// já foi declarado, não pode declarar mais
let pi2 = 3;
console.log(pi2);

// pi2 is not defined
if (true) {
  let pi2 = 3.141592;
}
console.log(pi2);
