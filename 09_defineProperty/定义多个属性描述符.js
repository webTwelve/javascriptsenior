let obj = {
  _age: 18,
  // 第二种写法
  get age() {
    return this._age;
  },
  set age(value) {
    this._age = value;
  },
};
Object.defineProperties(obj, {
  name: {
    configurable: true,
    enumerable: false,
    value: "哈哈哈",
  },
  // 第一种写法
  // age: {
  //   configurable: true,
  //   enumerable: true,
  //   get: function () {
  //     return this._age;
  //   },
  //   set: function (value) {
  //     this._age = value;
  //   },
  // },
});
console.log(obj);
