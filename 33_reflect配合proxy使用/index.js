let obj = {
  name: "aa",
  age: 18,
};

let objProxy = new Proxy(obj, {
  get(target, key) {
    //返回一个对象的一个key的值
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    //设置一个对象的key的值
    Reflect.set(target, key, value); //返回boolen类型 因为Object.freeze可以将对象冻结不可以设置属性 所以有可能设置不成功
  },
});
objProxy.name = "bb";
console.log(objProxy.name);
