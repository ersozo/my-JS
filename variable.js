/*
function sayHello() {
  {
    {
      var foo = "World";
      console.log(`Hello ${foo}`);
    }
    console.log(`Again Hello ${foo}`);
  }
  console.log(`Again Hello ${foo}`);
}

sayHello();

var age = 45;

if (age === 100) {
  console.log(`Age is ${age}`);
} else {
  console.log(`Age is not ${age}`);
}

function myFunction(number) {
  var i = 0;
  while (i < number) {
    console.log(i);
    i++;
  }
  console.log(`last number is ${i}`);
}

myFunction(20);

for (let index = 21; index <= 30; index++) {
  console.log(index);
}




var myVar1 = 12;

function myFunc() {
  myVar2 = "hello ozgur";
  console.log("🚀 ~ file: degisken.js ~ line 45 ~ myFunc ~ myVar2", myVar2);
}

myFunc();
// myFunc();
console.log(myVar2);

// Declaration Scope
function test() {
  var myValue = "hi"; // local variable
  console.log("🚀 ~ file: degisken.js ~ line 55 ~ test ~ myValue", myValue);
}
test();
console.log(myValue); // error!

// Global Scope
function test() {
  myValue = "hi"; // global variable
}
test();
console.log(myValue); // "hi"
*/

// const limit = 100;
// let result = 0;

// console.time("execution time");

// for (let index = 0; index <= limit; index++) {
//   result += index;
// }

// console.log(result);

// console.timeEnd("execution time");

const arr = [1, 2, 3, 4, 5];

console.log(arr.at(-1));

const firstName = "Ozgur";

console.log(firstName.at(-1));
console.log(firstName.charAt(firstName.length - 1));
console.log(firstName[firstName.length - 1]);
