class Person {
  //构造方法
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._address = "北京市";
  }
  // 实例方法
  running() {
    console.log("running");
  }
  //访问器方法
  get address() {
    return this._address;
  }
  set address(newval) {
    this._address = newval;
  }
  //静态方法  只等Person.eatting调用   不能实例调用
  static eatting() {
    console.log("eatting");
  }
}
let p = new Person("AA", 18);
console.log(p);
p.address = "内蒙古";
console.log(p);
Person.eatting();
