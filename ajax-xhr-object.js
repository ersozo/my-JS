// initializing request object
const xhr = new XMLHttpRequest();

// open method
xhr.open("GET", "https://api.github.com/users/ersozo/repos");
// create event handler for onreadystatechange
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    data.forEach((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${repo.name}</strong> ${repo.language}`;
      document.querySelector("#results").appendChild(li);
    });
  }
};

xhr.send();

// const text = '["Ford", "BMW", "Audi", "Fiat"]';
// const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';

// const myArr = JSON.parse(text);
// console.log(myArr);
