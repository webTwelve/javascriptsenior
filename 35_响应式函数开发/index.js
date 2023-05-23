let obj = {
  name: "AA",
  age: 18,
};
let activeReactiveFn = null;

class Depend {
  constructor() {
    this.reactiveFns = new Set();
  }
  addDepend(fn) {
    this.reactiveFns.add(fn);
  }
  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn);
    }
  }
  notify() {
    this.reactiveFns.forEach((item) => {
      item();
    });
  }
}
// 收集依赖
let targetMap = new WeakMap();
function getDepend(target, key) {
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }
  return depend;
}
function watchFn(fn) {
  activeReactiveFn = fn;
  fn();
  activeReactiveFn = null;
}
const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    const depend = getDepend(target, key);
    depend.depend();

    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    Reflect.set(target, key, value, receiver);
    const depend = getDepend(target, key);

    depend.notify();
  },
});
watchFn(function () {
  console.log(objProxy.name, "===");
  console.log(objProxy.age, "---");
});
watchFn(function () {
  console.log(objProxy.age, "age|||||||||||||");
});
watchFn(function () {
  console.log(objProxy.age, "1111111111");
  console.log(objProxy.age, "1111111111");
  console.log(objProxy.age, "1111111111");
});
console.log("============================");
objProxy.name = "bbb";
objProxy.age = 20;
// console.log(objProxy.name);
