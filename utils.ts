class GenerateUtils {
  //普通函数转柯里化函数
  Currying(fn) {
    let curried = (...args) => {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return (...argsR) => {
          return curried.apply(this, [...args, ...argsR]);
        };
      }
    };
    return curried;
  }
  //组合函数实现
  Compose(...fns) {
    let length = fns.length;
    fns.forEach((item) => {
      if (typeof item != "function") {
        throw TypeError("期望是一个函数");
      }
    });
    return function (...args) {
      let index = 0;
      let resault = length ? fns[index].apply(this, args) : args;
      while (++index < length) {
        resault = fns[index].call(this, resault);
      }
      return resault;
    };
  }
}
let Utils = new GenerateUtils();
//柯里化
// function sum9(x, y, z) {
//   console.log(this);
//   return x + y + z;
// }
// let current = Utils.Currying(sum9);
// let r = current(1, 2, 3);
// let r2 = current(1, 2)(3);
// let r3 = current.bind({}, 1)(2)(3);
// console.log(r, "===");
// console.log(r3, "===");
// console.log(current(1, 2, 3));
//组合函数
// function a1(n) {
//   return n * 2;
// }
// function b1(m) {
//   return m ** 2;
// }
// let aa2 = Utils.Compose()(30);
// console.log(aa2);
