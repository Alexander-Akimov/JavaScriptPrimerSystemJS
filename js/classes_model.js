System.register([], function (exports_1, context_1) {
    "use strict";
    var Product;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Product = /** @class */ (function () {
                function Product(id, name, category, description, price) {
                    this.id = id;
                    this.name = name;
                    this.category = category;
                    this.description = description;
                    this.price = price;
                }
                return Product;
            }());
            exports_1("Product", Product);
        }
    };
});
