/**
 * Created by cxyr on 2017/2/23.
 */


// alert('hello world in TypeScript!！！！!!!!')


/* 类型批注 */
// function area(shape: string, width: number, height: number){
//     var area = width * height;
//     return "I'm a " + shape + " with an area of " + area + " cm squared.";
// }
// document.body.innerHTML = area("rectangle", 30, 15);


/* 接口 */
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


/* 箭头函数表达式（lambda表达式） */
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

