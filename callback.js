// işlem sırasını değiştirmek için callback fonksiyonu yapısını kullanırız.

const people = [
  { name: "John", age: 35 },
  { name: "Tom", age: 28 },
];

const person = { name: "Alice", age: 32 };

// without using callback function
// function createPerson(person) {
//   setTimeout(() => {
//     people.push(person);
//   }, 6000);
// }

// with using callback function
function createPerson(person, cb) {
  setTimeout(() => {
    people.push(person);
    cb();
  }, 6000);
}

function getPerson() {
  setTimeout(() => {
    people.forEach((element) => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>name:</strong> ${element.name}    <strong>age:</strong> ${element.age}`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 2000);
}

// without using callback function
// createPerson(person);
// getPerson();

// with using callback function
createPerson(person, getPerson);

function clearPage() {
  document.querySelector("#posts").innerHTML = "";
}

document.querySelector(".btn-clr").addEventListener("click", clearPage);
