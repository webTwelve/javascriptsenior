let obj = reactive({
  name: "aa",
  age: 18,
});
let activedDependFn = null;
function watchFn(fn) {
  activedDependFn = fn;
  fn();
  activedDependFn = null;
}
class Depend {
  constructor() {
    this.dependFns = [];
  }
  depend() {
    if (activedDependFn) {
      this.dependFns.push(activedDependFn);
    }
  }
  notify() {
    this.dependFns.forEach((item) => {
      item();
    });
  }
}
let targetMap = new WeakMap();
//设置依赖
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
function reactive(obj) {
  return new Proxy(obj, {
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
}

watchFn(() => {
  console.log(obj.name);
});
watchFn(() => {
  console.log(obj.name);
  console.log(obj.age);
});
console.log("+++++++++++++++++++");
obj.name = "bb";
obj.age = 18;
