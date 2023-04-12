var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var GenerateUtils = /** @class */ (function () {
    function GenerateUtils() {
    }
    //普通函数转柯里化函数
    GenerateUtils.prototype.Currying = function (fn) {
        var _this = this;
        var curried = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args.length >= fn.length) {
                return fn.apply(_this, args);
            }
            else {
                return function () {
                    var argsR = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        argsR[_i] = arguments[_i];
                    }
                    return curried.apply(_this, __spreadArray(__spreadArray([], args, true), argsR, true));
                };
            }
        };
        return curried;
    };
    //组合函数实现
    GenerateUtils.prototype.Compose = function () {
        var fns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fns[_i] = arguments[_i];
        }
        var length = fns.length;
        fns.forEach(function (item) {
            if (typeof item != "function") {
                throw TypeError("期望是一个函数");
            }
        });
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var index = 0;
            var resault = length ? fns[index].apply(this, args) : args;
            while (++index < length) {
                resault = fns[index].call(this, resault);
            }
            return resault;
        };
    };
    return GenerateUtils;
}());
var Utils = new GenerateUtils();
//柯里化
// function sum9(x, y, z) {
//   console.log(this);
//   return x + y + z;
// }
// let current = Utils.Currying(sum9);
// let r = current(1, 2, 3);
// let r2 = current(1, 2)(3);
// let r3 = current.bind({}, 1)(2)(3);
// console.log(r, "===");
// console.log(r3, "===");
// console.log(current(1, 2, 3));
//组合函数
function a1(n) {
    return n * 2;
}
function b1(m) {
    return Math.pow(m, 2);
}
var aa2 = Utils.Compose()(30);
console.log(aa2);
