import { Name as OtherName, MyClass, MyBaseClass } from "classes";
import { resultFunc, myFunc, funcWithFancArgs, chainFunc } from "funcs";
import { printDataChainFunc } from "arrowfuncs";
import { MySubClass } from "classes_inheritance";
import { workWithObject, objectLiteral } from "objects";

//const myFunc = require('./funcs.js')
//import MySubClass = require("./classes_inheritance");

// let name = new OtherName();
// name.myFunc();

/*myLocalFunc();
function myLocalFunc() {
    console.log("This is a myLocalFunc function call statement");
}
*/

// console.log("Hello")
// console.log("Apples");
// console.log("This is a statement");
// console.log("This is also a statement");

//myFunc("Adam","sunny");
//myFunc("Adam");
//myFunc("Adam", "sunny");
//myFunc("Adam", "sunny", "one", "two", "three");

//console.log(resultFunc("Alex"))

// console.log(funcWithFancArgs(function () {
//     return "Alex";
// }));

// chainFunc(function () { return "Alex" }, console.log);
//printDataChainFunc(function () { return "Alex" }, console.log)

//classes
/*let myData = new MyClass("Adam", "sunny");
myData.printMessages();
myData.printMembers();
*/
/*let myBaseData = new MyBaseClass("Alex", "sunny");
myBaseData.printMessages();
myBaseData.printMembers();
console.log(myBaseData)
*/

//inheritance
// let myData = new MySubClass("Adam", "sunny", "London");
// myData.printMessages();

// objects
// workWithObject();
// objectLiteral();
/*
//modules
import { Name, WeatherLocation } from "modules/NameAndWeather";

let name = new Name("Adam", "Freeman");
console.log(name.nameMessage);

let loc = new WeatherLocation("raining", "London");

console.log(loc.weatherMessage);

*/
//bind_class
import   SportsStoreController  from "bind_class";

const storeController = new SportsStoreController();


let method = storeController.getAll; // Как сделать так чтобы сработал метод mapProduct();
console.log(method.prototype);
method.call();


