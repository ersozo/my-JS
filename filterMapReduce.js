let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isBigEnough(value) {
  return value > 4;
}

let a = isBigEnough(5);
let a1 = (i) => i > 4;
console.log(a);
console.log(a1(5));

let b = array.filter(isBigEnough);

let c = array.filter((i) => i > 5);

console.log(c);

let d = array
  .filter((i) => i > 3 && i < 8)
  .map((i) => i * 10)
  .reduce((i, j) => i + j);

console.log(d);
