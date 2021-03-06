Number.prototype.entre = function (start, end) {
  return this >= start && this <= end;
};

const printResult = function (nota) {
  if (nota.entre(9, 10)) {
    console.log("Quadro de honra");
  } else if (nota.entre(7, 8.99)) {
    console.log("Aprovado");
  } else if (nota.entre(5, 6.99)) {
    console.log("Recuperação");
  } else if (nota.entre(0, 3.99)) {
    console.log("Reprovado");
  } else {
    console.log("Nota inválida");
  }

  console.log("fim");
};

printResult(10);
printResult(7);
printResult(5);
printResult(2);
printResult(11);
