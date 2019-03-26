System.register([], function (exports_1, context_1) {
    "use strict";
    var myFunc, resultFunc, funcWithFancArgs, chainFunc;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            //Using Default and Rest Parameters
            myFunc = function (name, weather) {
                if (weather === void 0) { weather = "raining"; }
                var extraArgs = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    extraArgs[_i - 2] = arguments[_i];
                }
                console.log("Hello " + name + ".");
                console.log("It is " + weather + " today");
                for (var i = 0; i < extraArgs.length; i++) {
                    console.log("Extra Arg: " + extraArgs[i]);
                }
            };
            exports_1("myFunc", myFunc);
            // Defining Functions That Return Results
            resultFunc = function (name) {
                return "Hello " + name + ".";
            };
            exports_1("resultFunc", resultFunc);
            // Using Functions As Arguments to Other Functions
            funcWithFancArgs = function (nameFunction) {
                return ("Hello " + nameFunction() + ".");
            };
            exports_1("funcWithFancArgs", funcWithFancArgs);
            //Chaining Functions Calls
            chainFunc = function (dataFunction, printFunction) {
                printFunction(funcWithFancArgs(dataFunction));
            };
            exports_1("chainFunc", chainFunc);
            //module.exports = myFunc;
        }
    };
});
