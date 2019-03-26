(function () {
    var myArray = new Array();
    myArray[0] = 100;
    myArray[1] = "Alex";
    myArray[2] = true;
    console.log(myArray);
})();
(function () {
    var myArray = [100, "Adam", true];
    //console.log(myArray);
    console.log("Index 0: " + myArray[0]);
    myArray[0] = "Tuesday";
    console.log("Index 0: " + myArray[0]);
})();
console.log("---");
(function () {
    var myArray = [100, "Adam", true];
    for (var i = 0; i < myArray.length; i++) {
        console.log("Index " + i + ": " + myArray[i]);
    }
    console.log("---");
    myArray.forEach(function (value, index) { return console.log("Index " + index + ": " + value); });
})();
console.log("---");
(function () {
    var products = [
        { name: "Hat", price: 24.5, stock: 10 },
        { name: "Kayak", price: 289.99, stock: 1 },
        { name: "Soccer Ball", price: 10, stock: 0 },
        { name: "Running Shoes", price: 116.50, stock: 20 }
    ];
    var totalValue = products
        .filter(function (item) { return item.stock > 0; })
        .reduce(function (prev, item) { return prev + (item.price * item.stock); }, 0);
    console.log("Total value: $" + totalValue.toFixed(2));
})();
console.log("---");
(function () {
    var myArray = [100, "Adam", true];
    var otherArray = myArray.concat([200, "Bob", false]);
    for (var i = 0; i < otherArray.length; i++) {
        console.log("Array item " + i + ": " + otherArray[i]);
    }
})();
