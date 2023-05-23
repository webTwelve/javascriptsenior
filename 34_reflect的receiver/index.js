let obj = {
  _name: "aa",
  get name() {
    //receiver会改变this指向 相当于从objProxy取值
    console.log("从obj里取值");
    return this._name;
  },
  set name(newVal) {
    this._name = newVal;
  },
};
let objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    //receiver是obj的代理对象 也就是objProxy
    console.log(key, "==");
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    console.log(key, "==");
    Reflect.set(target, key, value, receiver);
  },
});
// objProxy.name = "bb";
console.log(objProxy.name);
