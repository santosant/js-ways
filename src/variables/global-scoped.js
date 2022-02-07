// pi is not defined
(function () {
  var pi = 3.141592;
})();

console.log(pi);

// pi works with global scoped (bad idea)
(function () {
  pi = 3.141592;
})();

console.log(pi);
