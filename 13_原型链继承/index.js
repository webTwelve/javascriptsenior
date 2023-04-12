function Person() {
  this.name = "aa";
  this.friends = [];
}
function Student(ee) {
  //第三个弊端
  this.class = "1";
}
Person.prototype.eating = function () {
  console.log("eating");
};
Person.prototype.running = function () {
  console.log("running");
};
Student.prototype = new Person();
let s1 = new Student();
console.log(s1); //第一个弊端 打印s1对象 继承的name是看不到的 但是可以获取s1.name
let s2 = new Student();
let s3 = new Student();
s2.friends.push(1); //第二个弊端 相当于获取了 new Student()实例化对象的引用 所以s2,s3都会被修改
console.log(s2.friends);
console.log(s3.friends);
let s4 = new Student("ee"); //第三个弊端 如果需要传参的话 因为使用了继承student构造函数上并无name 参数不好进行处理
