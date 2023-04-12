// 纯函数
function sum(n1, n2) {
  return n1 + n2;
}
sum(2, 3);
function sum2(n1, n2) {
  n1 = 3;
  return n1 + n2;
}
// 非纯函数
var a = 1;
function sum3(n1, n2) {
  return n1 + n2 + a;
}
