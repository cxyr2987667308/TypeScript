/**
 * Created by cxyr on 2017/2/23.
 */


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
class Shape{
    area: number;
    private color: string;
    constructor(public name: string, width: number, height: number){
        this.area = width * height;
        this.color = "pink";
    }
    shoutout(){
        return "I'm " + this.color + " " + this.name + " with an area of " + this.area + " cm squared.";
    }
}
var square = new Shape("square", 30, 30);
console.log(square.shoutout());
console.log('Area of Shape: ' + square.area);
console.log('Name of Shape: ' + square.name);
// console.log('Color of Shape: ' + square.color);
// console.log('Width of Shape: ' + square.width);
// console.log('Height of Shape: ' + square.height);


/** 继承 */
// 继承一个已存在的类并创建一个派生类，继承使用关键字extends.
class Shape3D extends Shape{
    volume: number;
    constructor(public name: string, width: number, height: number, length: number){
        super(name, width, height);
        this.volume = length * this.area;
    }
    shoutout(){
        return "I'm " + this.name + " with a volume of " + this.volume + " cm cube.";
    }
    superShout(){
        return super.shoutout();
    }
}
var cube = new Shape3D("cube", 30, 30, 30);
console.log(cube.shoutout());
console.log(cube.superShout());