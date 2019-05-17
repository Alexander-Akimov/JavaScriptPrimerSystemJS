//let myrrrr = new MyClass("","");//class used before its declaration
var MyClass = class  { //class expressions without name
    name;
    _weather;

    constructor(name, weather) {
        this.name = name;
        this._weather = weather;
    }
    set weather(value) {
        this._weather = value;
    }
    get weather() {
        return `Today is ${this._weather}`;
    }

    printMessages() {
        console.log("Hello " + this.name + ". ");
        console.log(this.weather);
    }
    printMembers() {
        for (var key in this) {
            console.log(this[key]);
        }
    }
}; 
export { MyClass };

class Name {
    myFunc() {
        console.log("This is a Name.myFunc function call statement");
    }
};
export { Name };

MyBaseClass.prototype.printMessages = function doPrintMessages() {
    console.log("Hello " + this.name + ". ");
    console.log("Today is " + this.weather + ".");
};
// var MyBaseClass = function (name, weather) {
function MyBaseClass(name, weather) { //hoisting this function declaration
    this.name = name;
    this.weather = weather;
}
MyBaseClass.prototype.printMembers = function doPrintMembers() {
    for (var key in this) {

        console.log(this[key]); //... делать что-то с this[key] ...
    }
};
export { MyBaseClass };