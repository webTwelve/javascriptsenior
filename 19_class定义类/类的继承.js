class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  running() {
    console.log("running");
  }
}
class Student extends Person {
  constructor(name, age, sex) {
    //使用super关键字调用父类的 构造函数
    super(name, age);
    this.sex = sex;
  }
  //重写父类的方法
  running() {
    super.running();
    //执行重写前 先用super关键字调用一遍之前父类方法的逻辑
    console.log("running2222");
  }
}
let s = new Student("AA", 18, "e");
console.log(s);
s.running();
