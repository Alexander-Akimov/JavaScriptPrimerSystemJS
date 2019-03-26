let messageFunctionVar = function (name, weather) {
    var message = "Hello" + name;
    if (weather == "sunny") {
        var message = "It is a nice day";
        console.log(message);
    } else {
        var message = "It is " + weather + " today";
        console.log(message);
    }
    console.log(message);
}

let messageFunctionLet = function (name, weather) {
    const message = "Hello " + name;
    if (weather == "sunny") {
        const message = "It is a nice day";
        console.log(message);
    } else {
        let message = "It is " + weather + " today";
        console.log(message);
    }
    console.log(message);
}

// messageFunctionVar("Adam", "raining");
messageFunctionLet("Adam", "raining");