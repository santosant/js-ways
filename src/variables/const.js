const pi3 = 3.141592;
console.log(pi3);

// TypeError: Assignment to constant variable.
pi3 = 3;

// TypeError: Identifier 'pi3' has already been declared.
// Cannot redeclare block-scoped variable 'pi3'.ts(2451
const pi3 = 3;

// pi3 is not defined
if (true) {
  const pi4 = 3.141592;
}
console.log(pi4);
