# 一、浏览器原理

## 1.1、DNS解析

```tex
解析出index.html css js 绘制HTML树和css树
```

# 二、V8引擎原理

## 1.1、js解析为AST抽象语法树(parse)

```tex
Vue 转为抽象语法树后createVnode
```

## 1.2、抽象语法树通过(ignition)转为字节码 转为CPU代码运行

## 1.3、常用的函数变量会通过(TurboFan)存储字节码，当下次使用时直接转为CPU代码运行

## 1.4、如果函数不能完成之前的运行操作则会重新转为字节码转为CPU代码运行

![](E:\practiceProject\javascriptsenior\images\V8.png)

## 1.5、代码被解析，v8引擎内部会创建一个对象GlobalObject ->go

## 1.6、运行代码

### 1.6.1、v8为了执行代码，内部会有一个执行上下文栈(execution context ECStack)(函数调用栈)

### 1.6.2、在执行全局代码时为了代码能够正常执行会创建全局执行上下文，压入栈底

### 1.6.3、函数执行时创建AO

### 1.6.4、函数执行上下文被销毁时，指向在内存地址的AO也会被销毁（闭包不会被销毁 ）

### 1.6.5、从内存地址GO根开始找只要AO有指向就不会被销毁

![](E:\practiceProject\javascriptsenior\images\stack.png)

![](E:\practiceProject\javascriptsenior\images\stack2.png)

# 三、闭包

```
1、一个普通的函数function，如果它可以访问外层作用域的变量，那么这个函数就是闭包。
2、从广义的角度来说：js中的函数都是闭包。
3、从狭义的角度说：js中一个函数，如果访问了外层作用域的变量，那么它就是一个闭包。
```

#### 只要AO没有被内存中的根GO指向就会销毁

# 四、this指向

## this是在运行时被绑定的

## this的绑定和调用方式以及调用的位置有关系

### 1、this绑定规则

#### 1.1  默认绑定 独立调用  没有调用主题this就指向window

```JS
function foo(){
    console.log(11)
}
foo()
```

#### 1.2隐式绑定 通过某个对象进行调用的，通过某个对象发起的函数调用。

```JS
function foo(){
    console.log(11)
}
var obj ={
    name:'why',
    foo:foo
}
obj.foo()
```

#### 1.3  显示绑定 

##### 1.3.1必须再调用的对象内部有一个对函数的引用(比如一个属性)

##### 1.3.2如果没有这样的引用，在进行调用时，会报找不到该函数的错误

##### 1.3.3正是通过这个引用，间接的将this绑定到了这个对象上

```JS

var obj ={
    name:'why',
    foo:function(){
    	console.log(11)
	}
}
var obj2 ={
    bar:obj.foo
}
obj2.bar()
```

#### 1.4 new绑定

##### 1.4.1创建一个全新的对象

##### 1.4.2这个新对象会被prototype链接

##### 1.4.3这个新对象会绑定到函数调用的this上(this的绑定在这个步骤完成)

##### 1.4.4如果函数没有返回其他对象，表达式会返回这个新对象

```js
    function Person(params) {
      this.name = params;
    }
    let a = new Person("why");
    let b = new Person("CXC");
```

### 2、高阶函数绑定this

```JS
var obj = {
  name: "aaa",
};
var s = "aaa";
var names = ["aaa", "bbbb", "ccc"];
names.forEach(function () {
  console.log(this);
}, obj);
```

# 五、实现call、apply、bind

1.实现call

```JS
Function.prototype.laCall = function (thisArg, ...args) {
  let fn = this;
  thisArg = thisArg ? Object(thisArg) : window;
  thisArg.fn = fn;
  let resault = thisArg.fn(...args);
  delete thisArg.fn;
  return resault;
};

function sum(num1, num2) {
  console.log(this, "===");
  return num1 + num2;
}
sum.laCall("123", 10, 20, 30);
console.log(sum.laCall("123", 10, 20, 30));
```

