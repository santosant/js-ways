var pi = 3.141592;
console.log(pi);

// reatribuição
pi = 3;
console.log("reatribuição: ", pi);

// parada estranha
var pi = 3;
console.log("parada enstranha:", pi);

// encapsulamento não respeitando o Bloco {}

if (true) {
  var pi = 3.141592;
}
console.log("encapsulamento: ", pi);
