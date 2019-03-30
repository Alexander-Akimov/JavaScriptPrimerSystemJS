System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function workWithObject() {
        //: any
        var myData = new Object();
        myData.name = "Adam";
        myData.weather = "sunny";
        console.log("__test object creation__");
        console.log("Hello " + myData.name + ".");
        console.log("Today is " + myData.weather + ".");
    }
    exports_1("workWithObject", workWithObject);
    function objectLiteral() {
        var myData = {
            name: "Adam",
            weather: "sunny",
            printMessages: function () {
                console.log("Hello " + this.name + ". ");
                console.log("Today is " + this.weather + ".");
            }
        };
        myData.printMessages();
    }
    exports_1("objectLiteral", objectLiteral);
    return {
        setters: [],
        execute: function () {
        }
    };
});
