let arr = ["abc", "cba", "nba"];
let [item1, item2, itme3] = arr;
console.log(item2);
let [, , item22] = arr;
console.log(item22);
//结构出第一个把剩下的放到新数组
let [item11, ...item] = arr;
console.log(item);
//如果数组长度不够 解构不出来给默认值
let [itema1, itema2, itmea3, itema4 = "lll"] = arr;
console.log(itema4);
