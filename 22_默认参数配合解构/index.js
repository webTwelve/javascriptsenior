let info = {
  name: "aa",
  age: 18,
  sex: 1,
};
function foo({ name, age } = { name: "WW", age: 18 }) {
  console.log(name, age);
}
foo();

//另一种写法
//默认值为 {} 如果解构不出来 给解构默认值
function foo1({ name = "XX", age = 33 } = {}) {
  console.log(name, age);
}
