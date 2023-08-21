// // fetching a JSON file
// fetch("./movies.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
// // fetching a text file
// fetch("./test.txt")
//   .then((response) => response.text())
//   .then((data) => console.log(data));

const div = document.createElement("div");

// fetching from an API
fetch("http://api.github.com/users/ersozo/repos")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      console.log(element);
      const paragraph = document.createElement("p");
      paragraph.textContent = element.name;
      div.appendChild(paragraph);
    });
    document.body.appendChild(div);
  });
