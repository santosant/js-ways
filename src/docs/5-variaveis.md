# 5. Variáveis

<aside>
💡 É possível declarar variáveis de diferentes formas, utilizando **var, let e const**

</aside>

## Clico de vida de uma variável

Declaração

Inicialização

Atribuição

- **Declaração**: O nome da variável é registrado no contexto de excecução, também conhecido como escopo, da função;
- **Inicialização**: A variável é inicializada com o valor _Undefined_
- **Atribuição**: Um valor é atribuído para a variável

## Var

Ao utilizar var, a variável é declarado e inicializado no escopo da função. **não respeitando bloco** e **permitindo a redeclaração e reatribuição**

```jsx
var pi = 3.141592;
console.log(pi);
```

## Let

Ao utilizar let, a variável é declarada no escopo da função mas só é inicializada posteriormente, **respeitando bloco** e **permitindo reatribuição mas não a redeclaração**

```jsx
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
```

## Const

Ao utilizar const, a variável é declarada no escopo da função mas só é inicializada posteriormente, **respeitando bloco** e **não permitindo reatribuição nem redeclaração**

```jsx
const pi3 = 3.141592;
console.log(pi3);

// TypeError: Assignment to constant variable.
pi3 = 3;

// TypeError: Identifier 'pi3' has already been declared.
// Cannot redeclare block-scoped variable 'pi3'.ts(2451
const pi3 = 3;

// pi4 is not defined
if (true) {
  const pi4 = 3.141592;
}
console.log(pi4);
```

Ao declarar uma variável sem var, let ou const **ela é criada no escopo global.**

```jsx
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
```

⚠️ Nunca declare variáveis sem var, let e const e **evite a utilização de var**

Um identificado válido deve começar com [a-zA-Z_$] seguido por [a-zA-Z0-0_$]

```jsx
// ok
let name;
let Name;
let _name;
let $name;

// or
let name123;
let Name123;
let _name123;
let $name123;

// bad
// Invalid tokens
let 123name123;
let @Name123;
let "name123;
let 'name123;
```
