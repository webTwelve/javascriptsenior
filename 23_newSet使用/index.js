let arr = [1, 3, 4, 5, 2, 1, 4];

//去重
let arr1 = new Set(arr);
let arr2 = Array.from(arr1);
console.log(arr2);
let arr3 = [...arr1];
console.log(arr3);
// //添加元素
arr1.add(66);
console.log(arr4);
// 删除元素
arr1.delete(1);
console.log(arr1);
// //清除元素
arr1.clear();
console.log(arr1);
//查看元素是否存在
let flag = arr1.has(1);
console.log(flag);
//遍历元素
arr1.forEach((item) => {
  console.log(item);
});
for (item of arr1) {
  console.log(item);
}
