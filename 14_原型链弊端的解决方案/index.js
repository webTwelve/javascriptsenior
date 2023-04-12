function Person(name, age, friends = []) {
  this.name = name;
  this.age = age;
  this.friends = friends;
}
function Student(name, age, friends) {
  //第三个弊端
  this.class = "1";
  Person.call(this, name, age, friends);
  /*  解决方案：使用call改变this指向 再Person调用时内部的this会指向Student 相当于s1.friends =friends 这样的话就不会相互影响 ，因为相当于给每个实例化对象添加了自己的属性 所以可以获取他们的所有属性 */
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
let s2 = new Student("ee", 20, [2, 3]);
let s3 = new Student("ff", 24, [6]);
s2.friends.push(1); //第二个弊端 相当于获取了 new Student()实例化对象的引用 所以s2,s3都会被修改
console.log(s2);
console.log(s3);
let s4 = new Student(); //第三个弊端 如果需要传参的话 因为使用了继承student构造函数上并无name 参数不好进行处理
