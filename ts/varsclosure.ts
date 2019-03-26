const myLocalVar = "apples";
let myFunc = function (name) {
    let myLocalVar = "sunny";
    let innerFunction = function () {
        return (`Hello ${name}! Today is ${myLocalVar}.`);
    }
    return innerFunction();
};
console.log(myFunc("Alex"));