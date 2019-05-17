System.register([], function (exports_1, context_1) {
    "use strict";
    var MyClass, Name;
    var __moduleName = context_1 && context_1.id;
    // var MyBaseClass = function (name, weather) {
    function MyBaseClass(name, weather) {
        this.name = name;
        this.weather = weather;
    }
    exports_1("MyBaseClass", MyBaseClass);
    return {
        setters: [],
        execute: function () {
            //let myrrrr = new MyClass("","");//class used before its declaration
            MyClass = /** @class */ (function () {
                function class_1(name, weather) {
                    this.name = name;
                    this._weather = weather;
                }
                Object.defineProperty(class_1.prototype, "weather", {
                    get: function () {
                        return "Today is " + this._weather;
                    },
                    set: function (value) {
                        this._weather = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                class_1.prototype.printMessages = function () {
                    console.log("Hello " + this.name + ". ");
                    console.log(this.weather);
                };
                class_1.prototype.printMembers = function () {
                    for (var key in this) {
                        console.log(this[key]);
                    }
                };
                return class_1;
            }());
            exports_1("MyClass", MyClass);
            Name = /** @class */ (function () {
                function Name() {
                }
                Name.prototype.myFunc = function () {
                    console.log("This is a Name.myFunc function call statement");
                };
                return Name;
            }());
            exports_1("Name", Name);
            ;
            MyBaseClass.prototype.printMessages = function doPrintMessages() {
                console.log("Hello " + this.name + ". ");
                console.log("Today is " + this.weather + ".");
            };
            MyBaseClass.prototype.printMembers = function doPrintMembers() {
                for (var key in this) {
                    console.log(this[key]); //... делать что-то с this[key] ...
                }
            };
        }
    };
});
