System.register(["bind_class"], function (exports_1, context_1) {
    "use strict";
    var bind_class_1, storeController, method;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (bind_class_1_1) {
                bind_class_1 = bind_class_1_1;
            }
        ],
        execute: function () {
            storeController = new bind_class_1.default();
            method = storeController.getAll; // Как сделать так чтобы сработал метод mapProduct();
            console.log(method.prototype);
            method.call();
        }
    };
});
