var obj = {
  name: "aaa",
};
var s = "aaa";
var names = ["aaa", "bbbb", "ccc"];
names.forEach(function () {
  console.log(this);
}, obj);
//显示绑定
function foo1() {
  console.log(this);
}
foo1.call(obj);
foo1.apply(obj);
