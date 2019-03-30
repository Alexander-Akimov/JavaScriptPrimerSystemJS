System.register([], function (exports_1, context_1) {
    "use strict";
    var funcWithFancArgs, printDataChainFunc;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            funcWithFancArgs = function (nameFunction) {
                return ("Hello " + nameFunction() + ".");
            };
            printDataChainFunc = function (dataFunction, printFunction) {
                return printFunction(funcWithFancArgs(dataFunction));
            };
            exports_1("printDataChainFunc", printDataChainFunc);
        }
    };
});
