function fn(n1, n2) {
  console.log(arguments);
  let arr = [],
    arr2 = [],
    arr3 = [];
  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  console.log(arr);
  arr2 = Array.prototype.slice.call(arguments);
  console.log(arr2);
  arr3 = [...arguments];
  console.log(arr3);
}
fn(1, 2, 3, 4, 5);
