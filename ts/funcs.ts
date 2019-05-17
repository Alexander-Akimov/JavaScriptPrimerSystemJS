
// function declaration notation
// Using Default and Rest Parameters
function myFunc(name, weather = "raining", ...extraArgs) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today");
    for (let i = 0; i < extraArgs.length; i++) {
        console.log("Extra Arg: " + extraArgs[i]);
    }
};

// function expression notation
// Defining Functions That Return Results
let resultFunc = function (name) {
    return `Hello ${name}.`;
};

// Using Functions As Arguments to Other Functions
let funcWithFancArgs = function (nameFunction) {
    return ("Hello " + nameFunction() + ".");
};

//Chaining Functions Calls
let chainFunc = function (dataFunction, printFunction) {
    printFunction(funcWithFancArgs(dataFunction));
}


export { myFunc, resultFunc, funcWithFancArgs, chainFunc };

//module.exports = myFunc;
