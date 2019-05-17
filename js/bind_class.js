System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function SportsStoreController() {
        this.mapProduct = function (product) {
            console.log("mapProduct call");
        };
        this.getAll = function () {
            this.mapProduct();
        };
    }
    exports_1("default", SportsStoreController);
    return {
        setters: [],
        execute: function () {
        }
    };
});
