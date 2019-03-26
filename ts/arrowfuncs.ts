

let funcWithFancArgs = (nameFunction) =>
    ("Hello " + nameFunction() + ".");


let printDataChainFunc = (dataFunction, printFunction) =>
    printFunction(funcWithFancArgs(dataFunction));

export { printDataChainFunc }