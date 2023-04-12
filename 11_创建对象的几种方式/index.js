//字面量创建对象
let obj = {
  name: "哈哈",
  age: 18,
  running: function () {
    console.log("running");
  },
  singing: function () {
    console.log("singing");
  },
};
//工厂模式创建对象(不是最好的方法因为这个对像没有明确的类型 比如人还是动物还是物品)
function createPerson(name, age) {
  let p = {
    running: function () {
      console.log("running");
    },
    singing: function () {
      console.log("singing");
    },
  };
  p.name = name;
  p.age = age;
  return p;
}
let p1 = createPerson("AA", 16);
let p2 = createPerson("BB", 17);
console.log(p1, p2);
//函数构造器创建对象constructor (会有具体类型)
function Person(name, age) {
  this.age = age;
  this.name = name;
  this.running = function () {
    console.log("running");
  };
  this.singing = function () {
    console.log("singing");
  };
}
let p3 = new Person("CC", 20);
let p4 = new Person("DD", 30);
console.log(p3, p4);
