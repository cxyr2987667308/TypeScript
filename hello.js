/**
 * Created by cxyr on 2017/2/23.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// alert('hello world in TypeScript!！！！!!!!')
/** 类型批注 */
// function area(shape: string, width: number, height: number){
//     var area = width * height;
//     return "I'm a " + shape + " with an area of " + area + " cm squared.";
// }
// document.body.innerHTML = area("rectangle", 30, 15);
/** 接口 */
// interface Shape{
//     name: string;
//     width: number;
//     height: number;
//     color?: string
// }
// function area(shape: Shape){
//     var area = shape.width * shape.height;
//     return "I'm a " + shape.name + " with area " + area + " cm squared.";
// }
// console.log(area({name: "rectangle", width: 30, height: 15}));
// console.log(area({name: "squared", width: 30, height: 30, color: "blue"}));
// console.log(area({width: 30, height: 15}));
/** 箭头函数表达式（lambda表达式） */
// 函数写法
// var shape = {
//     name: "rectangle",
//     popup: function(){
//         console.log('This inside popup(): ' + this.name);
//         setTimeout(function(){
//             console.log('This inside setTimeout(): ' + this.name);
//             console.log("I'm a " + this.name + "!");
//         }, 3000);
//     }
// }
// shape.popup();
// 箭头函数表达式
// var shape = {
//     name: "rectangle",
//     popup: function() {
//         console.log('This inside popup(): ' + this.name);
//         setTimeout(() => {
//             console.log('This inside setTimeout(): ' + this.name);
//             console.log("I'm a " + this.name + "!");
//         }, 3000);
//     }
// }
// shape.popup();
/** 类 */
// TypeScript支持继承了可选的类型批注支持的ECMAScript6的类
// public 和 private访问修饰符，public成员可以在任何地方访问，private成员只允许在类中访问
var Shape = (function () {
    function Shape(name, width, height) {
        this.name = name;
        this.area = width * height;
        this.color = "pink";
    }
    Shape.prototype.shoutout = function () {
        return "I'm " + this.color + " " + this.name + " with an area of " + this.area + " cm squared.";
    };
    return Shape;
}());
var square = new Shape("square", 30, 30);
console.log(square.shoutout());
console.log('Area of Shape: ' + square.area);
console.log('Name of Shape: ' + square.name);
// console.log('Color of Shape: ' + square.color);
// console.log('Width of Shape: ' + square.width);
// console.log('Height of Shape: ' + square.height);
/** 继承 */
// 继承一个已存在的类病创建一个派生类，继承使用关键字extends.
var Shape3D = (function (_super) {
    __extends(Shape3D, _super);
    function Shape3D(name, width, height, length) {
        var _this = _super.call(this, name, width, height) || this;
        _this.name = name;
        _this.volume = length * _this.area;
        return _this;
    }
    Shape3D.prototype.shoutout = function () {
        return "I'm " + this.name + " with a volume of " + this.volume + " cm cube.";
    };
    Shape3D.prototype.superShout = function () {
        return _super.prototype.shoutout.call(this);
    };
    return Shape3D;
}(Shape));
var cube = new Shape3D("cube", 30, 30, 30);
console.log(cube.shoutout());
console.log(cube.superShout());
