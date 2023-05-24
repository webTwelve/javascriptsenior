let obj = reactive({
  name: "aa",
  age: 18,
});
let activedDependFn = null;
class Depend {
  constructor() {
    this.dependFns = [];
  }
  depend() {
    if (activedDependFn) {
      this.dependFns.push(activedDependFn);
    }
  }
  notify(now, old) {
    this.dependFns.forEach((item) => {
      item(now, old);
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
      let oldValue = target[key];
      Reflect.set(target, key, value, receiver);
      const depend = getDepend(target, key);
      depend.notify(value, oldValue);
    },
  });
}

function watch(source, watchCallback) {
  activedDependFn = watchCallback;
  source();
  activedDependFn = null;
}
watch(
  () => obj.name,
  (newVal, oldVal) => {
    console.log(newVal, oldVal, "==watch侦听");
  }
);
obj.name = "bb";
