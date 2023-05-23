let obj = {
  name: "aa",
  age: 18,
};

let objProxy = new Proxy(obj, {
  /**
   *
   * @param {监听的对象obj} target
   * @param {当前被访问对象的key} key
   */
  get: function (target, key) {
    return target[key];
  },
  /**
   *
   * @param {监听的对象obj} target
   * @param {当前被设置对象的key} key
   * @param {被设置的值} newVal
   */
  set: function (target, key, newVal) {
    target[key] = newVal;
  },
  //监听in操作符
  has: function (target, key) {
    return key in target;
  },
  //监听删除属性
  deleteProperty: function (target, key) {
    delete target[key];
  },
});
console.log(objProxy.name);
console.log(objProxy.age);
objProxy.name = "bbb";
objProxy.age = 30;
console.log(obj.name);
console.log(obj.age);
console.log("name" in objProxy);
delete objProxy.name;
