function Purchases(workOne, workTwo) {
  const buyIceCream = workOne || workTwo;
  const buy50Tv = workOne && workTwo;
  const buy32Tv = workOne != workTwo;
  const keepHealth = !buyIceCream; // operador unário

  return { buyIceCream, buy32Tv, buy50Tv, keepHealth };
}

console.log(Purchases(true, true));
console.log(Purchases(true, false));
console.log(Purchases(false, true));
console.log(Purchases(false, false));
