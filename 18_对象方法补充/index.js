let person = {
  name: "aa",
  age: 18,
};
let student = Object.create(person, {
  address: {
    enumerable: false,
    configurable: true,
    writable: true,
    value: "啦啦啦",
  },
});
//判断 该属性是否存在在这对象上 而并非这个对象的原型上
console.log(student.hasOwnProperty("address"));
//判断 该属性是否存在在这对象上 包括原型
console.log("name" in student);
for (key in student) {
  console.log(key);
}
//判断 该构造函数的prototype是否 存在于这个实例化对象的原型链上
function Person() {
  this.name = "AA";
}
function Student() {
  // Person.call(this, name);
}
let p = new Person();
// console.log(p, "-----");
Student.prototype = Object.create(Person.prototype);
let stu = new Student();
// console.log(stu instanceof Person, "===");
console.log(stu, "===");
