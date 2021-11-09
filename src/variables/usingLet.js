// var = global e escopo de function
// let = escopo global, funcion e bloco.

var number = 1
{
  let number = 2
  console.log('dentro = ', number)
}

console.log('fora =', number);
