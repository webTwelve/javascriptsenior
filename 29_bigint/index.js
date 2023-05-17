let maxInt = Number.MAX_SAFE_INTEGER;
console.log(maxInt); //9007199254740991  目前最大的数字  超出可能会不准确
let bigint = 9007199254740991100n; //加n表示bigint类型
let n1 = (bigint = 100n);
let n2 = 200;
let n3 = n1 + BigInt(n2); //将number转为bigint类型
let n4 = Number(n3); //将bigint转为number (不安全)
