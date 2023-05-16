let str = "12321321312432";
//参数1 填充到多少位 参数2 填充什么  默认值：空格
let nstr = str.padStart(20, "*****").padEnd(25, "------");
console.log(nstr);
let str2 = "6877686786786576567";
let nstr2 = str2.slice(-4).padStart(21, "*");
console.log(nstr2);
