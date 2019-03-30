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
            MyClass = /** @class */ (function () {
                function MyClass(name, weather) {
                    this.name = name;
                    this._weather = weather;
                }
                Object.defineProperty(MyClass.prototype, "weather", {
                    get: function () {
                        return "Today is " + this._weather;
                    },
                    set: function (value) {
                        this._weather = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                MyClass.prototype.printMessages = function () {
                    console.log("Hello " + this.name + ". ");
                    console.log(this.weather);
                };
                MyClass.prototype.printMembers = function () {
                    for (var key in this) {
                        console.log(this[key]);
                    }
                };
                return MyClass;
            }());
            exports_1("MyClass", MyClass);
            ;
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
