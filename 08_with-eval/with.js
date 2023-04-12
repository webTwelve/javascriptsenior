let obj = { name: "哈哈", age: 18 };
function fn() {
  let name = "AA";
  // with有自己的作用域 首先会访问自己的obj
  with (obj) {
    console.log(name); //哈哈
  }
}
fn();

let jsString = 'let msg ="哈哈哈";console.log(msg);';
eval(jsString);
