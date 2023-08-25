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

// fetch options are given in an object: method, body, headers

function createPost({ title, body }) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ title, body }),
    headers: {
      "Content-Type": "application/json",
      token: "abc123",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

createPost({ title: "My POst", body: "This is my post" });
