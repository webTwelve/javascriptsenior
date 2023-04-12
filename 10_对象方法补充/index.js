let obj = {
  name: "哈哈哈",
  age: 18,
};
//禁止给对象添加新属性
Object.preventExtensions(obj);
//禁止配置(就是不能不可重新定义属性描述符和delete)对象
Object.seal(obj);
//禁止修改现有属性
Object.freeze(obj);
