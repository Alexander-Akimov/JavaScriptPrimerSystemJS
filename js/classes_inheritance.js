System.register(["classes"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var classes_1, MySubClass;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (classes_1_1) {
                classes_1 = classes_1_1;
            }
        ],
        execute: function () {
            MySubClass = /** @class */ (function (_super) {
                __extends(MySubClass, _super);
                function MySubClass(name, weather, city) {
                    var _this = _super.call(this, name, weather) || this;
                    _this.city = city;
                    return _this;
                }
                MySubClass.prototype.printMessages = function () {
                    _super.prototype.printMessages.call(this);
                    console.log("You are in " + this.city);
                };
                return MySubClass;
            }(classes_1.MyClass));
            exports_1("MySubClass", MySubClass);
        }
    };
});
