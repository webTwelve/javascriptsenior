let arr = [1, 2, [3, 4, [7, [9], 8]], 5, 6];
console.log(arr.flat(10));
let arr2 = ["11-22", "33-44", "55-66"];
//map和flat的结合   先map后再扁平化
let arr3 = arr2.flatMap((item) => {
  return item.split("-");
});
console.log(arr3);
