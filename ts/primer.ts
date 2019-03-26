import { Name } from "classes";
import { resultFunc, myFunc, funcWithFancArgs, chainFunc } from "funcs";
import { printDataChainFunc } from "arrowfuncs";

//const myFuncw = require('./funcs.js')
let name = new Name();
name.myFunc();

myLocalFunc();
function myLocalFunc() {
    console.log("This is a myLocalFunc function call statement");
}
// console.log("Hello")
// console.log("Apples");
// console.log("This is a statement");
// console.log("This is also a statement");

// myFunc("Adam","sunny");
//myFunc("Adam");
// myFunc("Adam", "sunny");
//myFunc("Adam", "sunny", "one", "two", "three");

//console.log(resultFunc("Alex"))

// console.log(funcWithFancArgs(function () {
//     return "Alex";
// }));

// chainFunc(function () { return "Alex" }, console.log);

printDataChainFunc(function () { return "Alex" }, console.log)
