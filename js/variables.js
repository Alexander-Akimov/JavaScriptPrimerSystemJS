var message = "global message"; // doesn't affect
var messageFunctionVar = function (name, weather) {
    var message = "Hello" + name;
    if (weather == "sunny") {
        var message = "It is a nice day";
        console.log(message);
    }
    else {
        var message = "It is " + weather + " today";
        console.log(message);
    }
    console.log(message);
};
var messageFunctionLet = function (name, weather) {
    var message = "Hello " + name;
    if (weather == "sunny") {
        var message_1 = "It is a nice day";
        console.log(message_1);
    }
    else {
        var message_2 = "It is " + weather + " today";
        console.log(message_2);
    }
    console.log(message);
};
//messageFunctionVar("Adam", "raining");
messageFunctionLet("Adam", "raining");
