function launchError(error) {
  throw "mensagem";
}

function printNameScreaming(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!😄");
  } catch (e) {
    launchError(e);
  }
  f;
}

const obj = { name: "Roberto" };
printNameScreaming(obj);
