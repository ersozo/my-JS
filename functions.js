// IMPORTANT NOTES FOR FUNCTION SYNTAX IN JAVASCRIPT

// 1. function declaration
function foo1(name) {
  console.log(`My name is ${name}.`);
}

// 2. function expression
const foo2 = function (name, age) {
  console.log(`My name is ${name} and I am ${age} years old.`);
};

// 3. arrow function: get rid of function keyword and use fat arrow (=>)
const foo3 = (name, age) => {
  console.log(`My name is ${name} and I am ${age} years old.`);
};

// 4. implicit return: in arrow function syntax, if there is a single (one line)
// expression, can omit "{ } and return keyword"
const foo4 = (name, age) =>
  console.log(`My name is ${name} and I am ${age} years old.`);

const foo5 = (a, b) => a + b;

// 5. arrow function with a single parameter, can leave off parenthesis "()"
const foo6 = (age) => console.log(`I am ${age} years old.`);

// 6. returning an object: use parenthesis around { } of object literal or use return keyword
const foo7 = () => ({
  key: "value",
});

const foo8 = () => {
  return { key: "value" };
};

// 7. arrow function in a callback: functions which take functions as an argument
// (e.g. forEach, filter, map, reduce ...)
array.forEach((element) => {
  // code
});
