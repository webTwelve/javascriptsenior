let obj = {
  name: "aa",
  age: 18,
};
Object.keys(obj).forEach((key) => {
  let value = obj[key];
  Object.defineProperty(obj, key, {
    get: function () {
      console.log("触发了get");
      return value;
    },
    set: function (newVal) {
      console.log("触发了set");
      value = newVal;
    },
  });
});

obj.name = "bb";
obj.age = 20;
console.log(obj.name);
console.log(obj.age);
