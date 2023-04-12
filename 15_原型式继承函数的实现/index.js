let obj = {
  name: "AA",
  age: 18,
};
// 将info的原型 改为obj的原型
//方案一
function createObject1(o) {
  let newObj = {};
  Object.setPrototypeOf(newObj, o);
  return newObj;
}
let info1 = createObject1(obj);
console.log(info1.__proto__);
//方案二
function createObject2(o) {
  function Fn() {}
  Fn.prototype = o;
  return new Fn();
}
let info2 = createObject2(obj);
console.log(info2.__proto__);
// 方案三
let info3 = Object.create(obj);
console.log(info3.__proto__);
