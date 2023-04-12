// function add(x) {
//   let t = function (y) {
//     x = x + y;
//     return t;
//   };
//   t.toString = function () {
//     return x;
//   };
//   return t;
// }
function add(...arg1) {
  let t = function (...arg2) {
    arg1 = [...arg1, ...arg2];
    return t;
  };
  t.toString = function () {
    let res = arg1.reduce((p, c) => {
      return p + c;
    }, 0);
    return res;
  };
  return t;
}
console.log(add(1)(2)(3) == 6);
console.log(add(1, 2, 3)(4) == 10);
console.log(add(1)(2)(3)(4)(5) == 15);
