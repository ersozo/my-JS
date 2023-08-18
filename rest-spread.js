const numbers = [1, 2, 3, 4];

// Javascript uses three dots (...) for both rest and spread operators:
// The difference is in its use case
// ... as the rest operator puts user-supplied values into an array
// ... as the spread operator expands iterables (arrays, objects) into individual elements.

// rest usage
function foo(...numbers) {
  numbers.forEach((element) => {
    console.log(element);
  });
}

foo(5, 6, 8, 9);

// spread usage
function bar(x, y, z, k) {
  return `first:${x}, second:${y}, first + second: ${x + y}, third + fourth: ${
    z + k
  }`;
}

console.log(bar(...numbers));
