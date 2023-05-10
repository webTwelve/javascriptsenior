let obj = {
  name: "aa",
  age: 18,
  sex: 0,
};

let { name } = obj;

//结构起别名  给默认值
let { name: newName = "CC" } = obj;
console.log(newName);
