function foo() {}
foo.prototype = {
  name: "aa",
  age: 18,
};
Object.defineProperty(foo.prototype, "construcor", {
  enumerable: false,
  writable: true,
  configurable: true,
  value: foo,
});
