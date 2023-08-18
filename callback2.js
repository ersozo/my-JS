// burada processData işlemi için datanın hazır olması gerekiyor. Veri çekme gibi
// zaman alan işlemlerde bu şekilde callback fonksiyonu yapısını kullanırız.

function fetchData(url, callback) {
  // Simulate an async operation, like fetching data from a server
  setTimeout(() => {
    const data = { name: "John", age: 30 };
    callback(data); // Execute the callback once data is fetched
  }, 5000);
}

function processData(data) {
  console.log(`Name: ${data.name}, Age: ${data.age}`);
}

fetchData("https://example.com/data", processData);
