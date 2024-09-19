const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

  console.log("response: ", response);

  return response;
};

async function fetchData2() {}

const data = fetchData();
console.log(data);
