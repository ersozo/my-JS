// function getData(endpoint, cb) {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", endpoint);

//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       cb(JSON.parse(this.responseText));
//     }
//   };

//   setTimeout(() => {
//     xhr.send();
//   }, Math.floor(Math.random() * 3000) + 1000);
// }

// getData("./movies.json", (data) => {
//   console.log(data);
//   getData("./actors.json", (data) => {
//     console.log(data);
//     getData("./directors.json", (data) => {
//       console.log(data);
//     });
//   });
// });

function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Something went wrong!");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

function showError(err) {
  const div = document.createElement("div");

  // const h1 = document.querySelector("h1");
  const h3 = document.createElement("h3");
  h3.innerHTML = `${err}`;
  div.appendChild(h3);
  document.body.appendChild(div);
}

getData("./movies.json")
  .then((movies) => {
    console.log(movies);
    return getData("./directors.json");
  })
  .then((directors) => {
    console.log(directors);
    return getData("./actors.json");
  })
  .then((actors) => {
    console.log(actors);
  })
  .catch((reject) => {
    console.log(reject);
    showError(reject);
  });
