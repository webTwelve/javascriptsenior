let obj = {
  name: "哈哈哈",
  age: 18,
};
// 数据属性描述符
Object.defineProperty(obj, "address", {
  value: "嘿嘿嘿", //默认值undefined
  //该属性为不可删除/也不可重新定义属性描述符号  比如在下面再写一遍Object.defineProperty
  configurable: false, //默认值false
  //该属性是address这个属性是否可以枚举(可以用for in遍历或者Object.keys可以获取到)
  enumerable: true, //默认值false
  //是否可以修改值
  writable: false, //默认为true
});
