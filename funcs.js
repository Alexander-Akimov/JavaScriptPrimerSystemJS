System.register([], function (exports_1, context_1) {
    "use strict";
    var Name;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Name = /** @class */ (function () {
                function Name() {
                }
                Name.prototype.myFunc = function () {
                    console.log("This is a myFunc function call statement");
                };
                return Name;
            }());
            ;
            exports_1("default", Name);
            //module.exports = myFunc;
        }
    };
});
