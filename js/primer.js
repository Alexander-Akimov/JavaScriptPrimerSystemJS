System.register(["classes", "arrowfuncs"], function (exports_1, context_1) {
    "use strict";
    var classes_1, arrowfuncs_1, name;
    var __moduleName = context_1 && context_1.id;
    function myLocalFunc() {
        console.log("This is a myLocalFunc function call statement");
    }
    return {
        setters: [
            function (classes_1_1) {
                classes_1 = classes_1_1;
            },
            function (arrowfuncs_1_1) {
                arrowfuncs_1 = arrowfuncs_1_1;
            }
        ],
        execute: function () {
            //const myFuncw = require('./funcs.js')
            name = new classes_1.Name();
            name.myFunc();
            myLocalFunc();
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
            arrowfuncs_1.printDataChainFunc(function () { return "Alex"; }, console.log);
        }
    };
});
