const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

  console.log("response: ", res);

  return res;
};

const data = fetchData();
console.log(data);
