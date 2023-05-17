let query = "name=aa&age=18";
let queryString = new URLSearchParams(query);
console.log(queryString);
for (item of queryString) {
  console.log(item);
}
console.log(Object.fromEntries(queryString));
