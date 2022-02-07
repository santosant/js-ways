# 6. Tipos de dados

Os tipos de dados na linguagem JavaScript se dividem em primitivos e objetos

Os primitivos são imutáveis, ou seja, ao longo do tempo seu valor é alterado

## Dados primitivos

```jsx
typeof 10;
typeof "JavaScript";
typeof true;
typeof Symbol("iterator");
typeof null;
typeof undefined;
```

Os objetos são valores que representam uma referência em memória que pode ser alterada

```jsx
typeof function sum(a, b) {return a + b};
typeof {name: "Linus Torvalds"};
typeof [1,2,4,5,6];
typeof /[a-zA-Z];
typeof (new Date());
```

![Untitled](6%20Tipos%20de%20dados%205f573b0577a54bb8bde3866b4b8d6025/Untitled.png)

Cuidado, não confunda os operadores **typeof**  e **instanceof**