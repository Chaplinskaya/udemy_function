"use strict";
let num=20;
function showFirstMessage(text) {
    console.log(text);
    num=10;
    //console.log(num);
}
showFirstMessage("Hello World!");
console.log(num);
///
function calc(a,b) {
    return(a+b);
}
console.log(calc(5,10));
console.log(calc(15,20));
///
function ret() {
    let num=50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);
///
const logger=function(){
    console.log("Hello!");
};
logger();
///
const calculator = (a,b) => {return a + b};
///
const str="teSt";
const arr=[1,2,4];
console.log(arr.length);
console.log(str[2]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);
const fruit="Some fruit";
console.log(fruit.indexOf("uit"));
console.log(fruit.indexOf("d"));//-1

const logg="Hello world";
//console.log(logg.slice(6,10));//worl
//console.log(logg.slice(-8,-2));//lo wor
//console.log(logg.substring(3,8));//lo wo
console.log(logg.substr(6,5));//world
const test="12.5px";
console.log(parseInt(test));//12
console.log(parseFloat(test));//12.5