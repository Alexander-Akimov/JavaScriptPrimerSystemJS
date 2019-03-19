System.register(["funcs"], function (exports_1, context_1) {
    "use strict";
    var funcs_1, name;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (funcs_1_1) {
                funcs_1 = funcs_1_1;
            }
        ],
        execute: function () {
            //const myFuncw = require('./funcs.js')
            name = new funcs_1.default();
            name.myFunc();
            console.log("Hello");
            console.log("Apples");
            console.log("This is a statement");
            console.log("This is also a statement");
        }
    };
});
