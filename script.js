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