let obj = {
  name: "哈哈哈",
  age: 18,
  _address: "",
};
// 存取属性描述符
//1.隐藏某一个私有属性不希望直接被外界使用和赋值
//2.如果我们希望截获某一个属性它被访问和设置值的过程时，也会使用存取属性描述符
Object.defineProperty(obj, "address", {
  //该属性为不可删除/也不可重新定义属性描述符号  比如在下面再写一遍Object.defineProperty
  configurable: false, //默认值false
  //该属性是address这个属性是否可以枚举(可以用for in遍历或者Object.keys可以获取到)
  enumerable: true, //默认值false
  get: function () {
    return this._address;
  },
  set: function (value) {
    this._address = value;
  },
});
obj.address = "AAA";
// console.log(obj.address);
