let s1 = Symbol("aa");
let s2 = Symbol("aa");
console.log(s1.description); //获取 symbol 描述符
console.log(s1 === s2); //false
let obj = {
  aa: "ppp",
  name: "aa",
  age: 18,
};
obj[s1] = "6777";
console.log(obj[s1]); //获取
