function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
Person.prototype.running = function () {
  console.log("running");
};
function createObject(o) {
  function Fn() {}
  Fn.prototype = o;
  return new Fn();
}
function inheritPrototype(subType, superType) {
  subType.prototype = createObject(superType.prototype);
  Object.defineProperty(subType.prototype, "constructor", {
    enumerable: false,
    writable: true,
    configurable: true,
    value: subType,
  });
}
function Student(name, age, sex, title1, title2) {
  Person.call(this, name, age, sex);
  this.title1 = title1;
  this.title2 = title2;
}
Student.prototype.studying = function () {
  console.log("studying");
};
inheritPrototype(Student, Person);
let stu1 = new Student("AA", 18, "男", "ee", "gg");
stu1.running();
console.log(stu1);
