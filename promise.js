// create a promise
const promise = new Promise((resolve, reject) => {
  // do some async task
  setTimeout(() => {
    console.log("Async task complete.");
    resolve();
  }, 2000);
});

promise.then(() => console.log("Promise consumed."));

console.log("hello from global scope.");

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ name: "John", age: 30 });
    } else {
      reject("Error: Something went wrong.");
    }
  }, 4000);
});

getUser
  .then((user) => console.log(`NAME: ${user.name}, AGE: ${user.age} `))
  .catch((error) => console.log(error));
//   .finally(() => console.log("promise has been resolved or rejected."));
