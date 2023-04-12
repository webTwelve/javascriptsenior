Function.prototype.laBind = function (thisArg, ...args) {
  var fn = this;
  thisArg = thisArg != null && thisArg != undefined ? Object(thisArg) : window;
  return function (...fnArgs) {
    thisArg.fn = fn;
    let res = thisArg.fn(...args, ...fnArgs);
    delete thisArg.fn;
    return res;
  };
};
function sum(n1, n2, n3, n4) {
  console.log("执行了SUM", this, n1, n2, n3, n4);
  return n1 + n2 + n3 + n4;
}
let sumFn = sum.laBind("aaa", 1, 2);
let res = sumFn(3, 4);
console.log(res);
