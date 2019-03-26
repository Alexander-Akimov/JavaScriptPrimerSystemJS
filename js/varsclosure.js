var myLocalVar = "apples";
var myFunc = function (name) {
    var myLocalVar = "sunny";
    var innerFunction = function () {
        return ("Hello " + name + "! Today is " + myLocalVar + ".");
    };
    return innerFunction();
};
console.log(myFunc("Alex"));
