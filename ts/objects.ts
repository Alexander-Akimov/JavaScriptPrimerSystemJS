function workWithObject() {
    //: any
    let myData: any = new Object();
    myData.name = "Adam";
    myData.weather = "sunny";

    console.log("__test object creation__")
    console.log("Hello " + myData.name + ".");
    console.log("Today is " + myData.weather + ".");
}

function objectLiteral() {
    
    let myData = {
        name: "Adam",
        weather: "sunny",
        printMessages: function () {
            console.log("Hello " + this.name + ". ");
            console.log("Today is " + this.weather + ".");
        }
    };
    myData.printMessages();

}

export { workWithObject, objectLiteral };