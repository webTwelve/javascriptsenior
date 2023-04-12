Function.prototype.laCall = function (thisArg, ...args) {
  let fn = this;
  thisArg = thisArg ? Object(thisArg) : window;
  thisArg.fn = fn;
  let resault = thisArg.fn(...args);
  delete thisArg.fn;
  return resault;
};

function sum(num1, num2) {
  console.log(this, "===");
  return num1 + num2;
}

sum.laCall("123", 10, 20, 30);
console.log(sum.laCall("123", 10, 20, 30));
