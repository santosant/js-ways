function rand({ min = 0, max = 1000 }) {
  const value = Math.random() * (min - min) + min;
  return Math.floor(value);
}

const obj = { max: 50, min: 40 };
// console.log(rand(obj));
// console.log(rand({ min: 955 }));
// console.log(rand(rand({})));
// console.log(rand(rand()));

// using Array inside functions parameters

function rand([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min];
  const value = Math.random() * (max - min) + min;
  return Math.floor(value);
}

console.log(rand([50, 40]));
console.log(rand([992]));
console.log(rand([, 10]));
