Function.prototype.laApply = function (thisArg, params) {
  if (!Array.isArray(params)) {
    throw Error("buxing");
  }
  let fn = this;
  thisArg = thisArg ? Object(thisArg) : window;
  thisArg.fn = fn;
  let resault = thisArg.fn(...params);
  delete thisArg.fn;
  return resault;
};
function sum(num1, num2) {
  console.log("sum被调用", this, num1, num2);
  return num1 + num2;
}
let r1 = sum.laApply("aaa", [123, 234]);
console.log(r1);
let r2 = sum.laApply("aaa");
