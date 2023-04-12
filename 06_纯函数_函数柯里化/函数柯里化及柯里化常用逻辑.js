// 柯里化
function sum(x, y, z) {
  x = x + 1;
  y = y + 2;
  z = z * 3;
  return x + y + z;
}
let res1 = sum(1, 2, 3);
console.log(res1);
// 柯里化后 -->
function sum2(x) {
  x = x + 1;
  return function (y) {
    y = y + 2;
    return function (z) {
      z = z * 3;
      return x + y + z;
    };
  };
}
let res2 = sum2(1)(2)(3);
console.log(res2);

// 柯里化前
function log(date, type, msg) {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}][${type}]---->[${msg}]`
  );
}
log(new Date(), "BUG", "找到一个BUG");
log(new Date(), "FIX", "修改一个BUG");
log(new Date(), "FEAT", "增加一个新功能");
// 柯里化后
let log2 = (date) => (type) => (msg) => {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}][${type}]---->[${msg}]`
  );
};
let nowDate = log2(new Date());
let TBug = log2(new Date())("BUG");
let TFix = log2(new Date())("Fix");
let TFeat = log2(new Date())("FEAT");
nowDate("BUG")("修改了BUG2");
TFeat("新增了两个功能");
