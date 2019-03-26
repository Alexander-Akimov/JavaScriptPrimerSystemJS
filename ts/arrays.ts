(function () {
    let myArray = new Array();
    myArray[0] = 100;
    myArray[1] = "Alex";
    myArray[2] = true;

    console.log(myArray);
})();

(() => {
    let myArray = [100, "Adam", true];
    //console.log(myArray);
    console.log("Index 0: " + myArray[0]);
    myArray[0] = "Tuesday";
    console.log("Index 0: " + myArray[0]);
})();
console.log("---");

(() => {
    let myArray = [100, "Adam", true];
    for (let i = 0; i < myArray.length; i++) {
        console.log("Index " + i + ": " + myArray[i]);
    }
    console.log("---");
    myArray.forEach((value, index) => console.log("Index " + index + ": " + value));
})();
console.log("---");

(() => {
    let products = [
        { name: "Hat", price: 24.5, stock: 10 },
        { name: "Kayak", price: 289.99, stock: 1 },
        { name: "Soccer Ball", price: 10, stock: 0 },
        { name: "Running Shoes", price: 116.50, stock: 20 }
    ];
    let totalValue = products
        .filter(item => item.stock > 0)
        .reduce((prev, item) => prev + (item.price * item.stock), 0);
    console.log("Total value: $" + totalValue.toFixed(2));
})();
console.log("---");

(() => {
    let myArray = [100, "Adam", true];
    let otherArray = [...myArray, 200, "Bob", false];
    for (let i = 0; i < otherArray.length; i++) {
        console.log(`Array item ${i}: ${otherArray[i]}`);
    }
})();

